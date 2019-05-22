import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import flatListData from '../assets/data/flatListData';

class FlatListItem extends Component {
  render() {
    return (
      <View style={{ backgroundColor: 'white' }}>
        <TouchableOpacity
          onPress={() => { this.props.navigation.navigate('checkout'); }}
        >
          <Text style={styles.textStyle}>{this.props.item.hora}</Text>
        </TouchableOpacity>
        <View style={styles.lineStyle} />
      </View>
      );
  }
}
// eslint-disable-next-line react/no-multi-comp
export default class HorarioCard extends Component {
  constructor(props) {
    super(props);
    console.log(props)
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ height: 40, justifyContent: 'center', alignItems: 'flex-start' }}>
          <Text style={{ color: 'grey', fontWeight: 'bold', fontSize: 15, marginLeft: 15 }}>Horários disponíveis</Text>
        </View>

        <FlatList
          data={flatListData}
          renderItem={({ item, index }) => (
            <FlatListItem item={item} index={index} navigation={this.props.screenProps.navigation} />
              )}
        />
 

      </View>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    color: 'grey',
    fontSize: 20,
    marginTop: 5,
    marginBottom: 5,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 5,
    paddingBottom: 5
  },
  lineStyle: {
    height: 1,
    backgroundColor: 'lightgrey',
    marginLeft: 12,
    marginRight: 12,
  }
});
