import React, { Component } from 'react';
import { View, Text, TextInput,Image, TouchableOpacity } from 'react-native';
import StatusFeiraTabNav from '../routes/StatusFeiraTabNav'
import ReuseIcon from '../components/ReuseIcon';

class PagInicial extends Component {
    render() {
        return (
            <View style={style.viewStyle}>
                < View style = {style.headerStyle} >
                    <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                        <ReuseIcon
                            name={'menu'}
                            color={'gray'}
                            size={25}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                        <Text style={style.textStyle}>Pedidos</Text>    
                    </TouchableOpacity>
                </View>
                <StatusFeiraTabNav screenProps={this.props.navigation}/>
            </View>
        );
    }
}
export default PagInicial;
const style = {
    viewStyle: {
        flex: 1,
        backgroundColor: 'white',
    },
    headerStyle:{
        flex: 0.10, 
        flexDirection: "row", 
        backgroundColor: 'white', 
        justifyContent: "flex-start", 
        alignItems: 'center',
        marginLeft: 10
    },
    textStyle: {
        fontSize: 20,
        color: 'gray',
        marginRight: 10,
        marginLeft:10
    }
}