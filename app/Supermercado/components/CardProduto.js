import React, { Component } from 'react';
import { Text, View } from 'react-native';

class CardProduto extends Component {
    render() {
        return (
             <View style={{ flex: 1 }}>
               <View style={styles.boxStyle}>
                   <Text style={styles.textStyle}>PRODUTOS</Text>
               </View>
               <View style={styles.boxStyleTres}>
                   <View style={{ marginRight: 30 }}>
                       <Text style={styles.textoStyleUm}>QNT</Text>
                       <Text style={styles.textoStyleDois}>01</Text>
                       <Text style={styles.textoStyleDois}>01</Text>
                       <Text style={styles.textoStyleDois}>01</Text>
                       <Text style={styles.textoStyleDois}>01</Text>
                       <Text style={styles.textoStyleDois}>01</Text>
                       <Text style={styles.textoStyleDois}>01</Text>
                   </View>
                   <View>
                       <Text style={styles.textoStyleUm}>DESCRIÇÃO</Text>
                       <Text style={styles.textoStyleDois}>PRODUTO</Text>
                       <Text style={styles.textoStyleDois}>PRODUTO</Text>
                       <Text style={styles.textoStyleDois}>PRODUTO</Text>
                       <Text style={styles.textoStyleDois}>PRODUTO</Text>
                       <Text style={styles.textoStyleDois}>PRODUTO</Text>
                       <Text style={styles.textoStyleDois}>PRODUTO</Text>
                   </View>
                   <View style={{ marginLeft: 30 }}>
                       <Text style={styles.textoStyleUm}>PREÇO</Text>
                       <Text style={styles.textoStyleDois}>R$ 0,00</Text>
                       <Text style={styles.textoStyleDois}>R$ 0,00</Text>
                       <Text style={styles.textoStyleDois}>R$ 0,00</Text>
                       <Text style={styles.textoStyleDois}>R$ 0,00</Text>
                       <Text style={styles.textoStyleDois}>R$ 0,00</Text>
                       <Text style={styles.textoStyleDois}>R$ 0,00</Text>
                   </View>
               </View>
               <View style={styles.boxStyleQuatro}>
                   <View>
                       <Text style={styles.textoStyleUm}>SUBTOTAL</Text>
                       <Text style={styles.textoStyleUm}>FRETE</Text>
                       <Text style={styles.textoStyleUm}>TOTAL</Text>
                   </View>
                   <View style={{ marginLeft: 30 }}>
                       <Text style={styles.textoStyleDois}>R$ 0,00</Text>
                       <Text style={styles.textoStyleDois}>R$ 0,00</Text>
                       <Text style={styles.textoStyleTres}>R$ 0,00</Text>
                   </View>
               </View>
             </View>
        );
    }
}

const styles = {
    boxStyle: {
        backgroundColor: 'white',
        marginTop: 5,
        marginHorizontal: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'center'
    },
    boxStyleTres: {
        backgroundColor: 'white',
        marginTop: 1,
        marginHorizontal: 10,
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'flex-start',
    },
    boxStyleQuatro: {
        backgroundColor: 'white',
        marginTop: 1,
        marginBottom: 7,
        marginHorizontal: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'flex-end'
    },
    textStyle: {
        color: 'orange',
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center',    
    },
    textoStyleUm: {
        color: 'black',
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 3
    },
    textoStyleDois: {
        color: 'grey',
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 3
    },
    textoStyleTres: {
        color: 'orange',
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 3
    },
  };

export default CardProduto;
