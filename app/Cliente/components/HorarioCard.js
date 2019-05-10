import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default class HorarioCard extends React.Component {
  render() {
    return (
        <View>
            <View style={{height: 40, justifyContent: 'center', alignItems: 'flex-start'}}>
                <Text style={{color: 'grey', fontWeight: 'bold', fontSize: 15, marginLeft: 15}}>Horários disponíveis</Text>
            </View>
            <View style={styles.boxStyle}>
                <ScrollView style={{width: '100%'}}>
                <View style={styles.horarioStyle}>
                    <Text style={styles.textStyle}>18h00 a 18h30</Text>
                    <View style={{backgroundColor:'orange', width: '100%'}}>
                        <Text style={{color: 'white',
                            fontSize: 15,
                            marginTop: 8,
                            marginBottom: 8,
                            paddingLeft: 15,
                            paddingRight: 15,
                            paddingTop: 5,
                            paddingBottom: 5}}>18h30 a 19h00
                        </Text>
                    </View>
                    <Text style={styles.textStyle}>19h30 a 20h00</Text>
                    <View style={styles.lineStyle}></View>
                    <Text style={styles.textStyle}>20h30 a 21h00</Text>
                    <View style={styles.lineStyle}></View>
                    <Text style={styles.textStyle}>21h30 a 22h00</Text>
                </View>
              </ScrollView>
            </View>
      </View>
    );
  }
}

const styles= StyleSheet.create({
  boxStyle: {
    width: '100%',
    height: 200,
    backgroundColor: 'turquoise',
    padding: 3,
    justifyContent: 'center',
    alignItems: 'center' 
  },
  horarioStyle:{
    width: '100%',
    height: '100%',
    backgroundColor:'white',

  },
  textStyle: {
    color: 'grey',
    fontSize: 15,
    marginTop: 5,
    marginBottom: 5,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 5,
    paddingBottom: 5
  },
  lineStyle: {
    height: 1, 
    backgroundColor: 'grey', 
    marginLeft: 12,
    marginRight: 12,
  }
})

