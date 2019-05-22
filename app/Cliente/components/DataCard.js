import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity } from 'react-native';

export default class DataCard extends React.Component {
  render() {
    return (
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.containerStyle}>
            <TouchableOpacity
                style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'orange',
              height: '100%',
              width: 90,
              marginHorizontal: 1
              }}
            onPress={() => {}}
            >
              <Text
                style={{
                color: 'white',
                fontSize: 40,
                fontWeight: 'bold'
                }}
              >6</Text>
              <Text
                style={{
                color: 'white',
                fontSize: 20,
                fontWeight: 'bold'
               }}
              >Hoje</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.DateStyle} onPress={() => { }}>
              <Text style={styles.numStyle}>7</Text>
              <Text style={styles.nomeStyle}>Amanhã</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.DateStyle} onPress={() => { }}>
              <Text style={styles.numStyle}>8</Text>
              <Text style={styles.nomeStyle}>Quarta</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.DateStyle} onPress={() => { }}>
              <Text style={styles.numStyle}>9</Text>
              <Text style={styles.nomeStyle}>Quinta</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.DateStyle} onPress={() => { }}>
              <Text style={styles.numStyle}>10</Text>
              <Text style={styles.nomeStyle}>sexta</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.DateStyle} onPress={() => { }}>
              <Text style={styles.numStyle}>11</Text>
              <Text style={styles.nomeStyle}>sábado</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  DateStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: '100%',
    width: 90,
    marginHorizontal: 1,
  },
  containerStyle: {
    flexDirection: 'row',
    backgroundColor: 'grey',
    width: '100%',
    height: 120,
    paddingTop: 1,
    paddingBottom: 1
  },
  numStyle: {
    color: 'grey',
    fontSize: 40,
    fontWeight: 'bold'
  },
  nomeStyle: {
    color: 'grey',
    fontSize: 20,
    fontWeight: 'bold'
  },
});

