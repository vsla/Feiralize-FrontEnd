import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ReuseIcon from './ReuseIcon';
import Picker from './Picker';

export default class CartCard extends Component{
    render(){
        return(
            <View>
                <View style={style.contentContainer}>
                    <Picker/>
                    <Text style={style.text}>{this.props.title}</Text>
                    < Picker/>
                    <TouchableOpacity onPress={()=>{}} style={{justifyContent:'center', marginHorizontal:10}}>
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
        fontSize:12,
    },
})