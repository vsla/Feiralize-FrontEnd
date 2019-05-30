import React, { Component } from 'react';
import { Text, View } from 'react-native';

class CardStatus extends Component {
    render() {
        return (
             <View>
               <View style={styles.boxStyle}>
                   <Text style={styles.textoStyleUm}>STATUS</Text>
                   <View style={styles.boxStyleDois}>
                       <Text style={styles.textoStyleTres}>PEDIDO FINALIZADO</Text>
                   </View>
               </View>
               <View style={styles.boxStyle}>
                   <View>
                   <Text style={styles.textoStyleUm}>SOLICITADO EM</Text>
                   <Text style={styles.textoStyleUm}>AGENDADO PARA</Text>
                   </View>
                   <View>
                   <Text style={styles.textoStyleDois}>12 DE MAIO</Text>
                   <Text style={styles.textoStyleDois}>14 DE MAIO - 13:30 / 14:30</Text>
                   </View>
               </View>
             </View>
        );
    }
}

const styles = {
    boxStyle: {
        backgroundColor: 'white',
        marginBottom: 1,
        paddingLeft: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start', 
        alignItems: 'center',
        height: 50
    },
    boxStyleDois: {
        backgroundColor: 'grey', 
        marginLeft: 70,
        borderRadius: 10,
        paddingTop: 5,
        paddingBottom: 5,
        paddingHorizontal: 8
    },
    textoStyleUm: {
        color: 'grey',
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 3
    },
    textoStyleDois: {
        color: 'black',
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 3,
        marginLeft: 30
    },
    textoStyleTres: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 3
    }
  };

export default CardStatus;
