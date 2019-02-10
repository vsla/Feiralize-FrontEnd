//BOOKsSCREEN

import React, { Component } from 'react';
import { ScrollView, Text, View, FlatList, ActivityIndicator, Alert } from 'react-native';
import axios from 'axios';
import ItemCard from './ItemCard';
import data from '../assets/data/products.json'
import { connect } from 'react-redux'
import CartScreen from '../pages/Carrinho'
import * as actions from "../redux/actions/action";
class ItemList extends Component {
    constructor(props) {
        super(props);
        console.log("item", this.props.navigation.state)
        this.state = {
            isLoading: true,
            fullData: data,
            routeName: this.props.navigation.state.routeName,
            data: null
        }
    }
    /*
    componentWillMount = () => {
        axios.get('http://rallycoding.herokuapp.com/api/music_albums')
            .then(response => 
                this.setState({ 
                    fullData: data,
                    isLoading: false
                })
            );
    }
    */
   componentWillMount() {
       //Verifica qual produto é de cada tela
        const data = []
        const originalArray = this.state.fullData
        for (var index in originalArray) {
            if (originalArray[index].type == this.state.routeName) {
                data.push(originalArray[index])
            }
        }
        // Coloca no estado
        this.setState({
            data: data,
            isLoading: false
        })
   }
    render() {
        if (this.state.isLoading){
            return(
                <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
                    <ActivityIndicator color='black'/>
                </View>
            )
        }
        return (
            <FlatList
                data={this.state.data}
                style={style.flatStyle}
                numColumns={2}
                keyExtractor={item => item.title}
                renderItem={({item}) =>
                    <ItemCard data={item} onPress = {(item) => this.props.add_to_cart(item)}/>}
            />
        );
        
    }
}

export default connect(null, actions)(ItemList); 

const style = {
    textStyle: {
        fontSize: 18,
        color: "black",
    },
    flatStyle:{
        flex:1,
    }
};
