/* eslint-disable no-undef */
/* eslint-disable react/no-multi-comp */
import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions, FlatList } from 'react-native';
import { Overlay, CheckBox } from 'react-native-elements';
import ReuseIcon from './ReuseIcon';
import Picker from './Picker';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/action';


class DefaultOverlay extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Overlay
        isVisible={this.props.parentState.showModal}
        height={Dimensions.get('window').height - 90}
        width={Dimensions.get('window').width - 60}
      >
        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'stretch' }}>
          <View style={style.header}>
            <TouchableOpacity
              onPress={() => { this.props.closeModal(); }}
              style={{ alignSelf: 'center', marginLeft: 5 }}

            >
              < ReuseIcon
                name="arrow-back"
                color='white'
                size={25}
              />
            </TouchableOpacity>

            <Text
              style={{ 
                textAlign: 'center', flex: 1, fontSize: 18, color: 'white', marginVertical: 8 
              }}
            >Vinho
            </Text>
          </View>

          <View style={{ flex: 1 }}>
            <FlatList

              data={[0, 1, 2]}
              renderItem={() => <CategoryComponent parentProps={this.props} />}

            />
          </View>
        </View>
      </Overlay>
    );
  }
}

const mapStateToProps = (state) => ({
    cartItems: state.cart
  });

export default connect(mapStateToProps, actions)(DefaultOverlay);

class CategoryComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pressed: false,
    };
  }
  
  pressed = () => {
    if (this.state.pressed === false) {
      this.setState({
        pressed: true
      });
    } else {
      this.setState({
        pressed: false
      });
    }
  }

  renderArrowIcon = () => {
    if (this.state.pressed === false) {
      return (
        < ReuseIcon
          name={'arrow-down'}
          color='white'
          size={25}
        />
      );
    }
    return (
      < ReuseIcon
        name={'arrow-up'}
        color='white'
        size={25}
      />
    );
  }

  renderBrands = () => {
    if (this.state.pressed === true) {
      return (
        <FlatList
          style={{ backgroundColor: '#dfdfdf' }}
          data={[0, 1, 2]}
          renderItem={() => <BrandComponent greatParentProps={this.props.parentProps} />}
          ItemSeparatorComponent={() =>
            <View 
            style={{ 
              backgroundColor: '#c0c0c0', alignSelf: 'stretch', height: 2, marginHorizontal: 10 
            }} 
            />
          }
        />
      );
    }
  }
  render() {
    return (
      <View style={{ alignItems: 'stretch', marginTop: 5 }}>
        <TouchableOpacity
          style={style.sectionHeader}
          onPress={() => this.pressed()}
        >

          <Text 
          style={{ textAlign: 'center', flex: 1, fontSize: 15, color: 'white', marginVertical: 3 }}
          > 
            CategoryName 
          </Text>
          <View style={{ marginRight: 5 }}>
            {this.renderArrowIcon()}
          </View>

        </TouchableOpacity>
        {this.renderBrands()}
      </View>
    );
  }
}

class BrandComponent extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      checked: false
    };
  }

  pressCheckBox = () => {
    if (this.state.checked === false) {
      this.setState({
        checked: true
      });
      const selectedBrand = this.props.greatParentProps.parentState.data[0];
      selectedBrand['brand'] = 'Quinta do morgado';
      selectedBrand.amount = '1kg';
      this.props.greatParentProps.selectProduct(this.props.greatParentProps.parentState.modalData.id);
      this.props.greatParentProps.add_to_cart(selectedBrand);
    } else {
      const selectedBrand = this.props.greatParentProps.parentState.data[0];
      selectedBrand['brand'] = 'Quinta do morgado';
      selectedBrand.amount = '1kg';
      this.setState({
        checked: false
      });
      this.props.greatParentProps.remove_from_cart(selectedBrand);
    }
  }

  render() {
    return (
      <View style={{ marginVertical: 5, }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <View style={{ marginLeft: 5 }}>
            < Picker
            data={[{
              label: '8 kg',
              value: '8',
            },
            {
              label: '8 kg',
              value: '8',
            },
            {
              label: '8 kg',
              value: '8',
            },
            ]}
            type={2}
            />
          </View>
          <Text>Quinta do morgado</Text>
          
          <CheckBox
            checked={this.state.checked}
            onPress={() => { this.pressCheckBox(); }}
            containerStyle={{ margin: 0, padding: 0 }}
          />
          
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  header: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    backgroundColor: 'darkorange',
    alignItems: 'center',
    borderRadius: 20,

  },
  sectionHeader: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    backgroundColor: 'gray',
    alignItems: 'center',
    marginBottom: 5
  }
});
