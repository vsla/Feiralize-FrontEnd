import React, { Component } from 'react';
import { ScrollView, Text, View, FlatList, ActivityIndicator, Alert, TouchableOpacity } from 'react-native';
import axios from 'axios';
import ItemCard from './ItemCard';
import { connect } from 'react-redux'
import CartScreen from '../pages/Carrinho'
import * as actions from "../redux/actions/action";
import { Overlay } from 'react-native-elements';
class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      fullData: [],
      routeName: this.props.navigation.state.routeName,
      data: [],
      showModal:false
    }
  }
  componentWillMount = () => {
    axios.get('https://feiralize-server.herokuapp.com/category/all/sub/' + this.state.routeName)
         .then(response => {
           console.log(response.data.subCategories)
           this.setState({
             data: response.data.subCategories,
             isLoading: false
           })
         })
         .catch((error)=>{
           console.log(error)
         })
    // get cate --> https://feiralize-server.herokuapp.com/category/all
    // sub --> https://feiralize-server.herokuapp.com/category/all/sub/id
    // Só troca o id para um novo
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
      */
    //Verifica qual produto é de cada tela
  }
  showModal = () => {
    this.setState({ showModal: true })
  }
  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator color='black' />
        </View>
      )
    } else {

      return (
        <View style={{flex:1}}>
          <FlatList
            data={this.state.data}
            style={style.flatStyle}
            numColumns={2}
            keyExtractor={item => item.title}
            renderItem={({ item }) =>
              <ItemCard data={item} showModal={this.showModal}/>}
          />
          <Overlay
            isVisible={this.state.showModal}
          >
            <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
              <TouchableOpacity
                onPress={() => {
                  this.setState({ showModal: false })
                }}
              >
                <Text>Voltar</Text>
              </TouchableOpacity>
            </View>
          </Overlay>
        </View>
      );
    }
  }
}

export default connect(null, actions)(ItemList);

const style = {
  textStyle: {
    fontSize: 18,
    color: "black",
  },
  flatStyle: {
    flex: 1,
  }
};
