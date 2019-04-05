import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import ReuseIcon from './ReuseIcon';
import Picker from './Picker';
import * as actions from '../redux/actions/action'

class CartCard extends Component{
    render(){
        return(
            <View style={{marginVertical:1}}>
            
                <View style={style.contentContainer}>
                    <View style={style.pickerQuantidade}>
                        < Picker data = {[{
                                    label: '8 kg',
                                    value: '8',
                                },
                                {
                                    label: '8 kg',
                                    value: '8',
                                },
                                {
                                    label: '8 kg',
                                    value: '8',
                                },
                            ]}
                        />
                    </View>
                    <Text style={style.text}>{this.props.item.title}</Text>
                    <View style={style.pickerMarca}>
                        < Picker data = {[{
                                    label: 'Red',
                                    value: 'red',
                                },
                                {
                                    label: 'Orange',
                                    value: 'orange',
                                },
                                {
                                    label: 'Blue',
                                    value: 'blue',
                                },
                            ]}
                        />
                    </View>
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
        fontSize:15,
        flex:2
    },
    pickerQuantidade:{
        flex:1.5
    },
    pickerMarca:{
        flex:2
    }
})