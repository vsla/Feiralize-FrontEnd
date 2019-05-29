import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import HeaderLogin from '../../components/HeaderLogin';
export default class getInitialLocation extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <HeaderLogin />
        <View style={{ flex: 2.8 }}>
          <View style={{ flex: 1, backgroundColor: 'transparent', marginHorizontal: 25, marginVertical: 20, justifyContent: 'center' }}>
            <GooglePlacesAutocomplete
              placeholder='Digite o seu endereço!'
              placeholderTextColor='white'
              minLength={2}
              query={{
                key: 'AIzaSyA860Saf9mYfkGDNapSWNz2LLiGt2I_cCo', //google api do site
                language: 'pt', // language of the results
              }}
              onPress={(data, details) => {
                console.log(data, details);
              }}
              //listViewDisplayed='auto'
              fetchDetails
              enablePoweredByContainer={false}
              styles={{
                container: {
                  //backgroundColor: 'red'
                  flex: 1
                },
                textInput: {
                  backgroundColor: 'darkorange',                  
                },
                textInputContainer: {
                  backgroundColor: 'darkorange',
                  borderRadius: 50
                }
              }}
            />
            <TouchableOpacity
              onPress={() => {}}
              style={{ backgroundColor: 'green', alignItems: 'center', marginHorizontal: '20%', borderRadius: 40 }}
            >
              <Text style={{ color: 'white', fontSize: 20 }}>Pronto!</Text>
            </TouchableOpacity>
          </View>
          
        </View>
        
      </View>
    );
  }
}
