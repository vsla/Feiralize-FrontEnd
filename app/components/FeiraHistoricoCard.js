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
                    //onPress={() => {this.setState({selected:true})}}
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
                <View style = {{flex:1, borderBottomWidth: 1,borderBottomColor: 'gray', marginHorizontal:10}}/>

                <TouchableOpacity 
                    style={{flexDirection:'row', alignItems:'center'}}
                    //onPress={() => {this.setState({selected:true})}}
                >
                    <View style={style.finishedContainerIcon}>
                        <ReuseIcon
                            name={'checkmark'}
                            color={'white'}
                            size={25}
                        />
                    </View>
                    <View style={style.textContainer}>
                        <Text>115 Produtos</Text>
                        <Text>20/02/2018</Text>
                    </View>
                    <View style={style.arrowContainer}>
                        <ReuseIcon
                            name={this.state.selected ? 'arrow-up' : 'arrow-down' }
                            color={'black'}
                            size={25}
                        />
                    </View>
                </TouchableOpacity>
                <View style = {{flex:1, borderBottomWidth: 1,borderBottomColor: 'gray', marginHorizontal:10}}/>

                <TouchableOpacity 
                    style={{flexDirection:'row', alignItems:'center'}}
                    //onPress={() => {this.setState({selected:true})}}
                >
                    <View style={style.finishedContainerIcon}>
                        <ReuseIcon
                            name={'checkmark'}
                            color={'white'}
                            size={25}
                        />
                    </View>
                    <View style={style.textContainer}>
                        <Text>150 Produtos</Text>
                        <Text>10/05/2018</Text>
                    </View>
                    <View style={style.arrowContainer}>
                        <ReuseIcon
                            name={this.state.selected ? 'arrow-up' : 'arrow-down' }
                            color={'black'}
                            size={25}
                        />
                    </View>
                </TouchableOpacity>
                <View style = {{flex:1, borderBottomWidth: 1,borderBottomColor: 'gray', marginHorizontal:10}}/>

                <TouchableOpacity 
                    style={{flexDirection:'row', alignItems:'center'}}
                    //onPress={() => {this.setState({selected:true})}}
                >
                    <View style={style.notFinishedContainerIcon}>
                        <ReuseIcon
                            name={'close-circle-outline'}
                            size={25}
                            color={'white'}
                        />
                    </View>
                    <View style={style.textContainer}>
                        <Text>25 Produtos</Text>
                        <Text>15/06/2018</Text>
                    </View>
                    <View style={style.arrowContainer}>
                        <ReuseIcon
                            //name={this.state.selected ? 'arrow-up' : 'arrow-down' }
                            name={'arrow-up'}
                            color={'black'}
                            size={25}
                        />
                    </View>
                </TouchableOpacity>
                <View style = {{flex:1, borderBottomWidth: 1,borderBottomColor: 'gray', marginHorizontal:10}}/>
                <TouchableOpacity onPress={this._onPressButton}>
                    <View style={style.button}>
                        <Text style={style.buttonText}>VER FEIRA</Text>
                    </View>
                </TouchableOpacity>
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
    notFinishedContainerIcon: {
        borderRadius: 100,
        backgroundColor: '#707070',
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
    button: {
        alignSelf: 'baseline',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#707070',
        borderRadius: 5.3,
        height: 60,
        width: 300,
        marginTop: 70,
        marginHorizontal: 32
    },
    buttonText: {
        fontSize: 18,
        color: 'white'
      }
})
