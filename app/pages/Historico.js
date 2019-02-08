import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
  TextInput,Image, TouchableHighlight
} from "react-native";
import { List, ListItem, SearchBar } from "react-native-elements";
import _ from 'lodash'
import { getUsers, contains } from "../components/SearchHelp";
import ReuseIcon from "../components/ReuseIcon";

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
    return (
      <View style={style.viewStyle}>
                < View style = {style.headerStyle} >
                    < TouchableHighlight style={{marginLeft: 20}} onPress={() => this.props.navigation.navigate('Carrinho')}>
                        <ReuseIcon
                            name="arrow-back"
                            color='white'
                            size={30}
                        />
                    </TouchableHighlight>
                    <View style={style.inputStyle}>
                        <TextInput style={style.textStyle}
                            placeholder="Buscar item" onChangeText={this.handleSearch}
                            placeholderTextColor='white'
                        />
                        < ReuseIcon
                        name = "search"
                        color = 'white'
                        size = {30}
                        />
                    </View>
                </View>
            </View>
    )
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
          keyExtractor={item => item.title}
          ListHeaderComponent={this.renderHeader}
        />
      </SafeAreaView>
    );
  }
}

const style = {
  viewStyle: {
      flex: 1,
      backgroundColor: 'white',
  },
  headerStyle:{
      flex: 0.18, 
      flexDirection: "row", 
      backgroundColor: 'darkorange', 
      justifyContent: "space-between", 
      alignItems: 'center',
  },
  inputStyle: {
      flex:2,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      marginRight:20
  },
  textStyle: {
      fontSize: 20,
      color: 'white',
      marginRight: 10,
  }
}