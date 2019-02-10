import React, { Component } from "react";
import { View, Text, FlatList} from "react-native";
import { connect } from 'react-redux'
import ItemCard from '../components/ItemCard'
import CartCard from '../components/CartCard';

class Carrrinho extends Component {
    render() {
        return (
            < View >
                <FlatList
                    data={this.props.cart}
                    keyExtractor={item => item.title}
                    renderItem={( {item} ) =>
                        <CartCard title={item.title}/>}
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

export default connect(mapStateToProps)(Carrrinho);