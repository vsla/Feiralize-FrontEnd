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

    /*
    axios.get(`https://feiralize-server.herokuapp.com/category/all/sub/${this.state.routeName}`)
         .then(response => {
           console.log(response.data.subCategories);
           this.setState({
             data: response.data.subCategories,
             isLoading: false
           });
         })
         .catch((error) => {
           console.log(error);
         });
  */
    /*
    axios.get('https://feiralize-api.herokuapp.com/products')
      .then(response => {
        const data = []
        const originalArray = response.data
        for (var index in originalArray) {
          if (originalArray[index].type == this.state.routeName) {
            data.push(originalArray[index])
          }
        }
        console.log(response.data)
        this.setState({
          fullData: response.data,
          data: data,
          isLoading: false
        })
      })
      .catch(error => { })
      
    //Verifica qual produto é de cada tela
    */
  }

  //Função para adicionar produto na badge
  productSelected = categoryId => {
    const selected = this.state.selected;
    if (categoryId in selected) {
      selected[categoryId] += 1;
    } else {
      selected[categoryId] = 1;
    }
  };

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
          selectProduct={this.productSelected}
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
              parentState={this.state}
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
