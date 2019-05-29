import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import HeaderLogin from '../../components/HeaderLogin';
export default class getInitialLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLocation: null,
    };
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <HeaderLogin />
        <View style={{ flex: 3.5 }}>
          <Text style={{ color: 'green', fontSize: 28, alignSelf: 'center', marginVertical: 15 }}>Sua localização!</Text>
          <View style={{ flex: 1, backgroundColor: 'transparent', marginHorizontal: 25, marginVertical: 10, justifyContent: 'center' }}>
            <GooglePlacesAutocomplete
              placeholder='Digite o seu endereço'
              placeholderTextColor='#ffffff'
              minLength={2}
              query={{
                key: 'AIzaSyA860Saf9mYfkGDNapSWNz2LLiGt2I_cCo', //google api do site
                language: 'pt', // language of the results
              }}
              onPress={(data, details) => {
                console.log(data, details, data.structured_formatting.main_text );
                this.setState({ selectedLocation: data.structured_formatting.main_text });
              }}
              //listViewDisplayed='auto'
              fetchDetails
              enablePoweredByContainer={false}
              styles={{
                textInput: {
                  backgroundColor: 'darkorange', 
                  color: 'white'
                },
                textInputContainer: {
                  backgroundColor: 'darkorange',
                  borderRadius: 50,
                },
                listView: {
                }
              }}
            />
            <TouchableOpacity
              onPress={() => { this.props.navigation.navigate('bottomNavigator')}}
              style={{ backgroundColor: 'green', alignItems: 'center', marginHorizontal: '20%', borderRadius: 40, marginTop: 20 }}
            >
              <Text style={{ color: 'white', fontSize: 20 }}>Pronto</Text>
            </TouchableOpacity>
          </View>
          
        </View>
        
      </View>
    );
  }
}
