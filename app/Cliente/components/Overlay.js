import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Dimensions} from 'react-native'
import { Overlay, CheckBox } from 'react-native-elements';
import ReuseIcon from './ReuseIcon';
import { Picker } from 'native-base';

export default class DefaultOverlay extends Component {
  constructor(props){
    super(props)
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
              onPress={() => {this.props.closeModal()}}
              style={{alignSelf:'center', marginLeft:5 }}
              
            >
              < ReuseIcon
                name="arrow-back"
                color='white'
                size={25}
              />
            </TouchableOpacity>
              
            <Text style={{textAlign:'center', flex:1, fontSize:18, color:'white', marginVertical:8}}>Vinho</Text>
          </View>

          <View style={{flex:1}}>
            <CategoryComponent/>
            <CategoryComponent />
            <CategoryComponent />
          </View>


        </View>
      </Overlay>
    )
  }
}

class CategoryComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
      pressed : false,
    }
  }
  renderArrowIcon = () => {
    if(this.state.pressed === false){
      return(
        < ReuseIcon
          name={'arrow-down'}
          color='white'
          size={25}
        />
      )}else{
      return(
        < ReuseIcon
          name={'arrow-up'}
          color='white'
          size={25}
        />  
      )}
  }
  pressed = () => {
    if (this.state.pressed === false){
      this.setState({
        pressed:true
      })
    }else{
      this.setState({
        pressed: false
      })
    }
  }
  renderBrands = () => {
    if (this.state.pressed === true) {
      return(
        <BrandComponent/>
      )
    }
  }
  render() {
    return (
      <View style={{alignItems:'stretch'}}>
        <TouchableOpacity 
          style={style.sectionHeader}
          onPress={() => this.pressed()}
        >
        
          <Text style={{ textAlign: 'center', flex: 1, fontSize: 15, color: 'white', marginVertical: 3 }}> CategoryName </Text>
          <View style={{marginRight:5}}>
            {this.renderArrowIcon()}
          </View>
          
        </TouchableOpacity>
        {this.renderBrands()}
      </View>
    )
  }
}

class BrandComponent extends Component {
  render() {
    return (
      <View style={{ marginVertical: 5, backgroundColor: '#dfdfdf' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          < Picker data={[{
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
          />
          <Text>Quinta do morgado</Text>
          <CheckBox
            checked={true}
          />
        </View>
      </View>
    )
  }
}

const style = StyleSheet.create({
  header: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    backgroundColor: 'darkorange',
    alignItems: 'center',
    borderRadius: 20,
    marginBottom:5
  },
  sectionHeader:{
    justifyContent: 'flex-start',
    flexDirection: 'row',
    backgroundColor: 'gray',
    alignItems: 'center',
    marginBottom: 5
  }
})