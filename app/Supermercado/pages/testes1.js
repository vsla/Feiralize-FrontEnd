import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';


export default class testes extends Component {
  constructor(props){
    super(props)
    this.state = {
      quantidade:0
    }
  }

  changeNumber = () => {
    this.setState({
      quantidade: this.state.quantidade + 1
    })
  }
  render() {
    return (
      <View style={styles.container}>
        
        <TouchableOpacity
          onPress={() => this.changeNumber()}
        >
          <Text>Clique</Text>
        </TouchableOpacity>
        <Texto
          quantidade={this.state.quantidade}
        />
      </View>
    );
  }
}
 class Texto extends Component {
  render() {
    return (
      <View>
        <Text> {this.props.quantidade} </Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
