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
            < View >
                <FlatList
                    data={this.props.cart}
                    keyExtractor={item => item.key}
                    renderItem={( {item} ) =>
                        <Text style={{ margin: 10 }}>{item.title}</Text>}
                />
            </View >
        )
    };
}

const mapStateToProps = (state) =>{
    return{
        cart: state.cart
    }
}

export default connect(mapStateToProps)(CartScreen);