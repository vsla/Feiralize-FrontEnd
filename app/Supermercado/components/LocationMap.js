import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import MapView from 'react-native-maps';


export default class LocationMap extends Component {
  constructor(props){
    super(props)
    this.state = {
      region:{
        latitude: -8.026414,
        longitude: -34.897994,
        latitudeDelta: 0.02,
        longitudeDelta: 0.02,
      },
      locationClient:{
        latitude: -8.026414,
        longitude: -34.897994,
      },
      locationSupermarket:{
        latitude: -8.0273212,
        longitude: -34.8942366,
      },
    }
  }
  render() {
    const{latitude, longitude} = this.state;
    return (
      <View style={{flex:1}}>
        <MapView
        initialRegion={this.state.region}
        style={style.MapView}
        rotateEnabled={false}
        scrollEnabled={false}
        zoomEnabled={false}
        showsPointsOfInterest={true}
        showsBuildings={true}
        
        >
          <MapView.Marker
            coordinate={this.state.locationClient}
            title={'cliente'}
            
          />
          <MapView.Marker
            coordinate={this.state.locationSupermarket}
            pinColor = 'darkorange'
            title={"supermarket"}
          />
        </MapView>
      </View>
    )
  }
}

const style = StyleSheet.create({
  MapView:{
    flex:1,
    marginVertical:5
  }
})
