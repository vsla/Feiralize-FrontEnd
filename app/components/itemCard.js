//PRODUCTS
import React, { Component } from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';

class ItemCard extends Component {
     render() {
        return (
            <View style={style.containerStyle}>
                <TouchableOpacity 
                    onPress={this.props.onPress}
                >
                    <ImageBackground
                        style={style.imageStyle}
                        source={require('../assets/data/images/0.jpg')}
                    >
                    </ImageBackground>
                </TouchableOpacity>
                <View style={style.textContainer}>
                    <Text >
                        {this.props.data.title}
                    </Text>
                </View>
            </View>
        );
    }
}
export default ItemCard;

const style = {
    containerStyle:{
        flex:1,
        margin:10,
        borderRadius:5,
        borderColor:'white',
        shadowColor: 'gray',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 2,
    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingVertical:10,
        marginLeft: 10,
    },
    imageStyle: {
        height: 150,
        width: '100%',
        opacity:0.6,
    }
}

