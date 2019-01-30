import React, { Component } from "react";
import {
    View,
    Text,
    FlatList
} from "react-native";
import { connect } from 'react-redux'
import ItemCard from '../components/ItemCard'

class CartScreen extends Component {
    render() {
        return (
            <Text>{this.props.cart}</Text>
        )
    };
}

const mapStateToProps = (state) =>{
    return{
        cart: state.cart
    }
}

export default connect(mapStateToProps)(CartScreen);