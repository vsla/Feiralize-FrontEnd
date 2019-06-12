/* eslint-disable no-undef */
/* eslint-disable react/no-multi-comp */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions, FlatList } from 'react-native';
import { Overlay } from 'react-native-elements';
import firebase from 'firebase';
import ReuseIcon from './ReuseIcon';
import * as actions from '../redux/actions/cart';
import BrandComponent from './OverlayComponents/BrandComponent';

class DefaultOverlay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subCategories: [],
      brands: [],
      haveSubCategories: this.props.parentState.modalData.haveSubCategories
    };
  }

  componentWillMount() {
    if (this.state.haveSubCategories === true) {
      firebase
        .firestore()
        .collection('subcategories')
        .doc(this.props.parentState.modalData.id)
        .get()
        .then(querySnapshot => {
          const response = querySnapshot.data();
          const subCategories = [];
          Object.keys(response).map(key => {
            if (key !== 'father') {
              subCategories.push(response[key]);
            }
          });
          this.setState({ subCategories });
        });
    } else 
      if (this.state.haveSubCategories === false) {
        firebase
          .firestore()
          .collection('brands')
          .doc(this.props.parentState.modalData.id)
          .get()
          .then(querySnapshot => {
            const response = querySnapshot.data().brands;
            const brands = Object.values(response);
            this.setState({ brands });
            console.log(brands);
          });
      }
  }

  renderSubCategoriesOrBrands = () => {
    if (this.state.haveSubCategories === true) {
      return (
        <FlatList
          data={this.state.subCategories}
          renderItem={subCategory => (
            <CategoryComponent
              parentProps={this.props}
              subCategory={subCategory.item}
            />
          )}
        />
      );
    } else if (this.state.haveSubCategories === false) {
      return (
        <FlatList
          style={{ marginTop: 10 }}
          data={this.state.brands}
          renderItem={brand => (
            <BrandComponent
              greatParentProps={this.props}
              brand={brand}
            />
          )}
          ItemSeparatorComponent={() => (
            <View
              style={{
                backgroundColor: '#c0c0c0',
                alignSelf: 'stretch',
                height: 2,
                marginHorizontal: 10
              }}
            />
          )}
        />
      );
    }
  }

  render() {
    return (
      <Overlay
        isVisible={this.props.parentState.showModal}
        height={Dimensions.get('window').height - 100}
        width={Dimensions.get('window').width - 40}
      >
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-start',
            alignItems: 'stretch'
          }}
        >
          <View style={style.header}>
            <TouchableOpacity
              onPress={() => {
                this.props.closeModal();
              }}
              style={{ alignSelf: 'center', marginLeft: 5 }}
            >
              <ReuseIcon name="arrow-back" color="white" size={25} />
            </TouchableOpacity>

            <Text
              style={{
                textAlign: 'center',
                flex: 1,
                fontSize: 18,
                color: 'white',
                marginVertical: 8
              }}
            >
              {this.props.parentState.modalData.name}
            </Text>
          </View>

          <View style={{ flex: 1 }}>
            {this.renderSubCategoriesOrBrands()}
          </View>
        </View>
      </Overlay>
    );
  }
}

const mapStateToProps = (state) => ({
    cartItems: state.cartItems.cart,
    itemsSelected: state.cartItems.itemsSelected
});

export default connect(mapStateToProps, actions)(DefaultOverlay);

class CategoryComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pressed: false,
      brands: []
    };
  }

  componentWillMount() {
    firebase
      .firestore()
      .collection('brands')
      .doc(this.props.subCategory.id)
      .get()
      .then(querySnapshot => {
        const response = querySnapshot.data().brands;
        const brands = Object.values(response);
        this.setState({ brands });
        console.log(brands);
      });
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
  };

  renderArrowIcon = () => {
    if (this.state.pressed === false) {
      return <ReuseIcon name={'arrow-down'} color="white" size={25} />;
    }
    return <ReuseIcon name={'arrow-up'} color="white" size={25} />;
  };

  renderBrands = () => {
    if (this.state.pressed === true) {
      return (
        <FlatList
          style={{ backgroundColor: '#dfdfdf' }}
          data={this.state.brands}
          renderItem={brand => (
            <BrandComponent
              greatParentProps={this.props.parentProps}
              brand={brand}
            />
          )}
          ItemSeparatorComponent={() => (
            <View
              style={{
                backgroundColor: '#c0c0c0',
                alignSelf: 'stretch',
                height: 2,
                marginHorizontal: 10
              }}
            />
          )}
        />
      );
    }
  };
  render() {
    return (
      <View style={{ alignItems: 'stretch', marginTop: 5 }}>
        <TouchableOpacity
          style={style.sectionHeader}
          onPress={() => this.pressed()}
        >
          <Text
            style={{
              textAlign: 'center',
              flex: 1,
              fontSize: 15,
              color: 'white',
              marginVertical: 3
            }}
          >
            {this.props.subCategory.name}
          </Text>
          <View style={{ marginRight: 5 }}>{this.renderArrowIcon()}</View>
        </TouchableOpacity>
        {this.renderBrands()}
      </View>
    );
  }
}

const style = StyleSheet.create({
  modalStyle: { 
    marginVertical: 5, 
    backgroundColor: '#dfdfdf', 
    paddingVertical: 5, 
    borderRadius: 10 
  },
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
  },

});
