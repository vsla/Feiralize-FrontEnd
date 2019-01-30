//BOOKsSCREEN

import React, { Component } from 'react';
import { ScrollView, Text, View, FlatList, ActivityIndicator } from 'react-native';
import axios from 'axios';
import ItemCard from './ItemCard';
import data from '../assets/data/products.json'
import { connect } from 'react-redux'
import CartScreen from '../pages/CartScreen'

class ItemList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            food: data,
        }
    }
    /*
    componentWillMount = () => {
        axios.get('http://rallycoding.herokuapp.com/api/music_albums')
            .then(response => 
                this.setState({ 
                    food: data,
                    isLoading: false
                })
            );
    }
    */
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
                data={this.state.food}
                style={style.flatStyle}
                numColumns={2}
                keyExtractor={item => item.title}
                renderItem={({item}) =>
                    <ItemCard data={item} onPress ={(item) => this.props.addItemToCart(item)}/>}
            />
        );
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart: (data) => dispatch({ type: 'ADD_TO_CART', payload: data })
    }
}
export default connect(null, mapDispatchToProps)(ItemList); 

const style = {
    textStyle: {
        fontSize: 18,
        color: "black",
    },
    flatStyle:{
        flex:1,
    }
};
