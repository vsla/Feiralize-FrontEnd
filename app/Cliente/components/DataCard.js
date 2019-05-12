import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';

export default class DataCard extends React.Component {
  render() {
    return (
      <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.containerStyle}>
              <View style={{justifyContent: 'center',
                          alignItems: 'center',
                          backgroundColor: 'orange',
                          height: '100%',
                          width: 90,
                          marginHorizontal: 1}}>
                  <Text style={{color: 'white',
                              fontSize: 40,
                              fontWeight: 'bold'}}>6</Text>
                  <Text style={{color: 'white',
                              fontSize: 20,
                              fontWeight: 'bold'}}>Hoje</Text>
              </View>
              <View style={styles.DateStyle}>
                  <Text style={styles.numStyle}>7</Text>
                  <Text style={styles.nomeStyle}>Amanhã</Text>
              </View>
              <View style={styles.DateStyle}>
                  <Text style={styles.numStyle}>8</Text>
                  <Text style={styles.nomeStyle}>Quarta</Text>
              </View>
              <View style={styles.DateStyle}>
                  <Text style={styles.numStyle}>9</Text>
                  <Text style={styles.nomeStyle}>Quinta</Text>
              </View>
        </View>
      </ScrollView>
    </View>
    );
  }
}

const styles= StyleSheet.create({
  DateStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: '100%',
    width: 90,
    marginHorizontal: 1,
  },
  containerStyle:{
    flexDirection: 'row',
    backgroundColor: 'grey',
    width: '100%',
    height: 120,
    paddingTop: 1,
    paddingBottom: 1
  },
  numStyle:{
    color: 'grey',
    fontSize: 40,
    fontWeight: 'bold'
  },
  nomeStyle: {
    color: 'grey',
    fontSize: 20,
    fontWeight: 'bold'
  },
})

