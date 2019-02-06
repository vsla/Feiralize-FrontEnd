import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  SafeAreaView
} from "react-native";
import { List, ListItem, SearchBar } from "react-native-elements";
import _ from 'lodash'
import { getUsers, contains } from "../components/SearchHelp";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      error: null,
      query: "",
      fullData: [],
    };
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    this.setState({ loading: true });

    getUsers(20, this.state.query)
      .then(users => {
        this.setState({
          loading: false,
          data: users,
          fullData: users,
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };

  handleSearch = text => {
      const formatQuery = text.toLowerCase();
      const data = _.filter(this.state.fullData, user => {
          return contains(user, formatQuery);
      });
      this.setState({ query: formatQuery, data }, () => this.makeRemoteRequest());
  }

  renderHeader = () => {
    return <SearchBar placeholder="Type Here..." lightTheme round onChangeText={this.handleSearch}/>;
  };

  render() {
    return (
      <SafeAreaView>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <ListItem
              title={`${item.title}`}
              containerStyle={{ borderBottomWidth: 0 }}
            />
          )}
          keyExtractor={item => item.email}
          ListHeaderComponent={this.renderHeader}
        />
      </SafeAreaView>
    );
  }
}