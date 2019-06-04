//PRODUCTS
import React, { Component } from 'react';
import { ImageBackground, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Badge } from 'react-native-elements';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/action';
import ReuseIcon from './ReuseIcon';


class ItemCard extends Component {
  constructor(props) {
    super(props);
      this.state = {
        imageUrl: this.props.data.pic,
        pressed: this.props.cartItems.includes(this.props.data),
        buttonStyle: { backgroundColor: 'white' },
        IconName: 'add',
        corStyle: 'orange',
        selected: 0
      };
  }

  addProduct = () => {
    this.setState({
      selected: this.state.selected + 1
    });
  }

  buttonPressed = () => {
    //Requisição para saber se tem subcategorias ou apenas produtos
    this.props.showModal(this.props.data);
  }

  render() {
    return (
      <View style={style.containerStyle}>
        <TouchableOpacity
          onPress={() => this.buttonPressed()}
          style={{ flex: 1 }}
        >
          <View style={this.state.buttonStyle}>

            <ImageBackground
              style={{ height: 100, width: '100%', opacity: 0.6, flex: 1, }}
              source={{ uri: this.state.imageUrl }}
            />
            <View 
            style={{
              backgroundColor: this.state.corStyle,
              opacity: 0.9,
              borderRadius: 100,
              position: 'absolute',
              paddingHorizontal: 12,
              paddingVertical: 8,
              top: 5,
              right: 5
            }}
            >
              <ReuseIcon
                name={this.state.IconName}
                color={'white'}
                size={20}
              />
            </View>
          </View>
        </TouchableOpacity>
        <View style={style.textContainer}>
          <Text >
            {this.props.data.name}
          </Text>
          <Badge 
          value={this.props.data.id in this.props.parentState.selected
            ? this.props.parentState.selected[this.props.data.id].toString()
            : '0'} status='primary' containerStyle={{ marginRight: 10 }}
          />
        </View>
      </View>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartItems.cart
  };
};

export default connect(mapStateToProps, actions)(ItemCard);


const style = StyleSheet.create({
  containerStyle: {
    flex: 1,
    margin: 10,
    borderRadius: 5,
    borderColor: 'white',
    shadowColor: 'gray',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
  },
  textContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    marginLeft: 10,
    flexDirection: 'row'
  },
  imageStyle: {
    height: 150,
    width: '100%',
    opacity: 0.6,
    flex: 1,
    tintColor: 'green'
  },
});

