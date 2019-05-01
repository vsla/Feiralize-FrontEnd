import React, { Component } from "react";
import { View, Text, FlatList, TouchableOpacity} from "react-native";
import { connect } from 'react-redux'
import ItemCard from '../components/ItemCard'
import CartCard from '../components/CartCard';
import ReuseIcon from "../components/ReuseIcon";

class Carrrinho extends Component {
    render() {
        return (
            < View style={{flex:1}}>
              <FlatList
                data={this.props.cart}
                keyExtractor={item => item.title}
                renderItem={( {item} ) =>
                    <CartCard item={item}/>}
              />
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('ListaProduto') }
                style={{
                    position: 'absolute', bottom: 20, right: 25, backgroundColor: '#004000', 
                    paddingHorizontal:15, borderRadius:50, paddingVertical:5
                }}
              >
                <ReuseIcon
                name={'add'}
                size={40}
                color={'white'}
                />
              </TouchableOpacity>
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