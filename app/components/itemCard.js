//PRODUCTS
import React, { Component } from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import ReuseIcon from './ReuseIcon';
import { connect } from "react-redux";
import * as actions from "../redux/actions/action";
import theme from '../styles/theme.style';

class ItemCard extends Component {
    constructor(props){
        super(props),
        this.state = {
            imageUrl: 'https://raw.githubusercontent.com/wedeploy-examples/supermarket-web-example/master/ui/assets/images/' + this.props.data.filename,
            pressed: this.props.cartItems.includes(this.props.data) ? true : false,
<<<<<<< HEAD
            buttonStyle:  this.props.cartItems.includes(this.props.data) ? {backgroundColor:'#31ff26'} : {backgroundColor:'white'},
            iconStyle:  this.props.cartItems.includes(this.props.data) ? 'checkmark' : 'add',
            corStyle: this.props.cartItems.includes(this.props.data) ? 'green' : 'orange'
        }
    }
    buttonPressed = () =>{
        console.log(this.state)
        this.props.onPress(this.props.data);
        this.setState({
            pressed: true,
            buttonStyle: {backgroundColor:'#31ff26'},
            iconStyle: 'checkmark',
            corStyle: 'green'
        });
=======
            buttonStyle:  this.props.cartItems.includes(this.props.data) ? {backgroundColor:'#0d7401'} : {backgroundColor:'white'},
        };
    }
    buttonPressed = () =>{
        this.props.onPress(this.props.data)
        this.setState({
            pressed: true,
            buttonStyle: {backgroundColor:'#0d7401'}
        })
>>>>>>> 248d36895e722b62dde65fd6640427fe45ded7ac
    }
    
     render(){
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
<<<<<<< HEAD
                        <View style={{backgroundColor:this.state.corStyle, opacity:1, borderRadius:100, position:'absolute', padding:10}}>
                            <ReuseIcon
                            name={this.state.iconStyle}
                            color={'white'}
                            size={20}
=======
                        
                        </ImageBackground>
                        <View style={{ backgroundColor: theme.BG_color, opacity: 0.9,borderRadius: 100, position: 'absolute', paddingHorizontal: 20, paddingVertical:10, bottom: 5, right: 5 }}>
                            <ReuseIcon
                                name={'add'}
                                color={'white'}
                                size={20}
>>>>>>> 248d36895e722b62dde65fd6640427fe45ded7ac
                            />
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={style.textContainer}>
                    <Text >
                        {this.props.data.title}
                    </Text>
                </View>
            </View>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.cart
    }
}

export default connect(mapStateToProps, actions)(ItemCard);


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

