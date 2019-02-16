import React, { Component } from "react";
import { View, Text, TextInput,Image, TouchableOpacity } from 'react-native';
import ListaProdutoTabNav from '../routes/ListaProdutoNav'
import ReuseIcon from "../components/ReuseIcon";

class ListaProduto extends Component {
    render() {
        return (
            <View style={style.viewStyle}>
                < View style = {style.headerStyle} >
                    < TouchableOpacity style={{marginLeft: 20, flexDirection: 'row'}} onPress={() => this.props.navigation.navigate("Compra")}>
                        <ReuseIcon
                            name="arrow-back"
                            color='white'
                            size={30}
                        />
                    </TouchableOpacity>
                    <View style={style.inputStyle}>
                        < TouchableOpacity 
                            style={{marginLeft: 20}} 
                            onPress={() => this.props.navigation.navigate('ItemSearching')}>
                            <View style={{flexDirection:'row'}}>
                                <Text style={style.textStyle}>
                                    Buscar item
                                </Text>
                                < ReuseIcon
                                name = "search"
                                color = 'white'
                                size = {30}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <ListaProdutoTabNav/>
            </View>
        );
    }
}
export default ListaProduto
const style = {
    viewStyle: {
        flex: 1,
        backgroundColor: 'white',
    },
    headerStyle:{
        flex: 0.18, 
        flexDirection: "row", 
        backgroundColor: 'darkorange', 
        justifyContent: "space-between", 
        alignItems: 'center',
    },
    inputStyle: {
        flex:2,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginRight:20
    },
    textStyle: {
        fontSize: 20,
        color: 'white',
        marginRight: 10,
    }
}