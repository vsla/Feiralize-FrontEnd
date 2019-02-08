//PRODUCTS
import React, { Component } from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import ReuseIcon from './ReuseIcon';

const Image = require('Image');
class ItemCard extends Component {
    constructor(props){
        super(props),
        this.state = {
            imageUrl: 'https://raw.githubusercontent.com/wedeploy-examples/supermarket-web-example/master/ui/assets/images/' + this.props.data.filename,
            pressed: false,
            buttonStyle: {backgroundColor:'white'},
        }
    }
    buttonPressed = () =>{
        console.log(this.state)
        this.props.onPress(this.props.data);
        this.setState({
            pressed: true,
            buttonStyle: {backgroundColor:'#31ff26'}
        });
        console.log(this.state)
    }
    
     render() {
        return (
            <View style={style.containerStyle}>
                <TouchableOpacity 
                    onPress={() => this.buttonPressed()}
                    disabled={this.state.pressed}
                    style={{flex:1}}
                >
                    <View style={this.state.buttonStyle}>
                        <ImageBackground
                            style={{height: 100, width: '100%', opacity: 0.6, flex: 1, }}
                            source={{uri: this.state.imageUrl }}
                        >
                        <View style={{backgroundColor:"orange", opacity:1, borderRadius:100, position:'absolute', padding:10}}>
                            <ReuseIcon
                            name={'add'}
                            color={'white'}
                            size={20}
                            />
                        </View>
                        </ImageBackground>
                    </View>
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
    containerStyle: {
        flex: 1,
        margin: 10,
        borderRadius: 5,
        borderColor: 'white',
        shadowColor: 'gray',
        shadowOffset: {width: 2,height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 2,
    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingVertical: 10,
        marginLeft: 10,
    },
    imageStyle: {
        height: 150,
        width: '100%',
        opacity: 0.6,
        flex: 1,
        tintColor: "green"
    }
}

