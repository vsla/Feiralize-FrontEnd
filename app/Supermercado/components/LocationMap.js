import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import MapView from 'react-native-maps';


export default class LocationMap extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <MapView
          initialRegion={{
            latitude: -27.2106710,
            longitude:-49.63622700,
            latitudeDelta:0.0042,
            longitudeDelta:0.0031
          }}
        style={style.MapView}
        />
      </View>
    )
  }
}

const style = StyleSheet.create({
  MapView:{
    flex:1,
  }
})
