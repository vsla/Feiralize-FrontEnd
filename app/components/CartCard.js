import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import ReuseIcon from './ReuseIcon';
import Picker from './Picker';
import * as actions from '../redux/actions/action'

class CartCard extends Component{
    render(){
        return(
            <View style={{marginVertical:10}}>
                <View style={style.contentContainer}>
                    <Picker/>
                    <Text style={style.text}>{this.props.item.title}</Text>
                    < Picker/>
                    <TouchableOpacity // Carrinho de remover
                        onPress={()=>{this.props.remove_from_cart(this.props.item)}} 
                        style={{justifyContent:'center', marginHorizontal:10}}
                    >
                        <ReuseIcon
                        name='trash'
                        color="darkorange"
                        size={25}
                        />
                    </TouchableOpacity>
                </View>
                <View style = {{flex:1, borderBottomWidth: 1,borderBottomColor: 'black', marginHorizontal:10}}/>
            </View>
        )
    }
}
export default connect(null, actions)(CartCard)
const style = StyleSheet.create({
    contentContainer:{
        flexDirection: "row", 
        justifyContent: "space-around", 
        alignItems: "center", 
        marginVertical: 10,
        marginHorizontal: 10,
    },
    text: {
        marginHorizontal:10,
        fontSize:13,
        paddingHorizontal:10
    },
})