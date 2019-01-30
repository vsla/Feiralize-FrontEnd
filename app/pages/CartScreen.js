import React, { Component } from "react";
import {
    View,
    Text,
} from "react-native";
import { connect } from 'react-redux'
import ItemCard from '../components/ItemCard'

class CartScreen extends Component {

    render() {
        console.log(this.props.cartItems)

        return (
            <View>
                <ItemCard
                    onPress={this.props.removeItem}
                    data={this.props.cartItems} />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cartItems: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (data) => dispatch({ type: 'REMOVE_FROM_CART', payload: data })
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);