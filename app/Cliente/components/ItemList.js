/* eslint-disable no-undef */
import React, { Component } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import firebase from "firebase";
import { connect } from 'react-redux';
import ItemCard from './ItemCard';
import * as actions from '../redux/actions/cart';
import DefaultOverlay from './OverlayListaProduto';


class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      fullData: [],
      routeName: this.props.navigation.state.routeName,
      data: [],
      showModal: false,
      selected: {},
      modalData: null
    };
  }

  componentWillMount() {
    const firestore = firebase.firestore();
    firestore
      .collection('categories')
      .doc(this.state.routeName)
      .get()
      .then(querySnapshot => {
        const response = querySnapshot.data();
        const categories = Object.keys(response).map(key => {
          response[key].id = key;
          return response[key];
        });
        this.setState({
          data: categories,
          isLoading: false
        });
      });
  }

  showModal = categoryData => {
    this.setState({ showModal: true, modalData: categoryData });
  };
  closeModal = () => {
    this.setState({ showModal: false, modalData: null });
  };
  renderOverlay = () => {
    if (this.state.showModal === true) {
      return (
        <DefaultOverlay
          parentState={this.state}
          closeModal={this.closeModal}
        />
      );
    }
    return(
      <View/>
    )
  };
  render() {
    if (this.state.isLoading) {
      return (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <ActivityIndicator color="black" />
        </View>
      );
    }
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.state.data}
          style={style.flatStyle}
          numColumns={2}
          keyExtractor={item => item.name}
          renderItem={({ item }) => (
            <ItemCard
              data={item}
              showModal={this.showModal}
            />
          )}
        />
        {this.renderOverlay()}
      </View>
    );
  }
}

export default connect(null, actions)(ItemList);

const style = {
  textStyle: {
    fontSize: 18,
    color: 'black',
  },
  flatStyle: {
    flex: 1,
  }
};
