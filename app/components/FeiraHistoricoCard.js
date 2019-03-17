import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import ReuseIcon from './ReuseIcon';

export default class FeiraHistoricoCard extends Component {
    constructor(props){
        super(props);
        this.state ={
            selected: false
        }
    }
    pressed = () =>{
        if (this.props.selected){
            return(
                <View>
                    <Text>oi</Text>
                </View>
            )
        } 
    }
    
    render() {
        return (
            <View >
                <TouchableOpacity 
                    style={{flexDirection:'row', alignItems:'center'}}
                    onPress={() => {this.setState({selected:true})}}
                >
                    <View style={style.finishedContainerIcon}>
                        <ReuseIcon
                            name={'checkmark'}
                            color={'white'}
                            size={25}
                        />
                    </View>
                    <View style={style.textContainer}>
                        <Text>82 Produtos</Text>
                        <Text>24/01/2018</Text>
                    </View>
                    <View style={style.arrowContainer}>
                        <ReuseIcon
                            name={this.state.selected ? 'arrow-up' : 'arrow-down' }
                            color={'black'}
                            size={25}
                        />
                    </View>
                </TouchableOpacity>
                <View style = {{flex:1, borderBottomWidth: 1,borderBottomColor: 'black', marginHorizontal:10}}/>
            </View>
        )
        
    }
}

const style = StyleSheet.create({
    finishedContainerIcon: {
        borderRadius: 100,
        backgroundColor: 'green',
        paddingVertical:5,
        paddingHorizontal:7.5,
        margin:10
    },
    textContainer: {
        marginLeft:10
    },
    arrowContainer: {
        position: "absolute",
        right: 20,
        
    },
})
