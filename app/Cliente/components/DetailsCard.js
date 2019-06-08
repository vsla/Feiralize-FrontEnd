import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/cart'

class DetailsCard extends Component{
    render(){
        return(
            <View style={{marginTop:3}}>
            
                <View style={style.contentContainer}>
                    <View>
                        <Text style={{marginHorizontal:10,
                            fontSize:15,
                            flex:2,
                            color:'#454f63'}}>
                            {this.props.item.rating} kg
                        </Text>
                    </View>
                    <View style={{alignContent: 'flex-start', alignSelf: 'center'}}>
                        <Text style={style.text}>{this.props.item.title}</Text>
                        <Text style={{marginHorizontal:10,
                            fontSize:12,
                            flex:2,
                            color:'#909090'}}>
                            Marca indefinida
                        </Text>
                    </View>
                    <View>
                        <Text style={{marginHorizontal:10,
                            fontSize:18,
                            flex:2,
                            color:'#454f63'}}>
                            R$ {this.props.item.price}
                        </Text>
                    </View>
                </View>

                <View style = {{flex:1, borderBottomWidth: 1,borderBottomColor: '#e9e9e9', marginHorizontal:10}}/>

            </View>
        )
    }
}
export default connect(null, actions)(DetailsCard)
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
        flex:2,
        color:'black'
    },
    pickerQuantidade:{
        flex:1.2,
    },
    pickerMarca:{
        flex:2.5
    }
})