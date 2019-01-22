import React, { Component } from 'react'
import { TouchableHighlight, Text, View } from 'react-native';

class ButtonItemListHeader extends Component{
    render(){
        return(
            <TouchableHighlight style={style.button}>
                <Text style={style .text}>{this.props.title}</Text>
            </TouchableHighlight>
        )
    }
}

const style = {
    button: {
        marginHorizontal: 15,
        
    },
    text:{
        color:'white',
        fontSize:18,
    }

}


export default ButtonItemListHeader;
