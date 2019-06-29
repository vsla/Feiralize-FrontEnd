/* eslint-disable max-len */
import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import call from 'react-native-phone-call';
import ReuseIcon from '../components/ReuseIcon';

class CardUsuario extends Component {
    constructor(props) {
        super(props);
        this.state = {
          value: this.props.cartValue,
          frete: 0
        };
      }

    call = () => {
        const args = {
          number: '0000000000',
          prompt: false,
        };
        call(args).catch(console.error);
    };

    render() {
        return (
             <View style={{ flex: 1 }}>
               <View style={styles.boxStyle}>
                   <View style={{flex:1,flexDirection:'row', justifyContent:'flex-start'}}>
                        <ReuseIcon name='radio-button-off' size={40} color='lightgrey' />
                        <Text style={styles.textStyle}>
                            MERCANDELLI
                        </Text>
                    </View>
                   <TouchableOpacity style={{ flexDirection: 'row', marginRight: 10 }} onPress={this.call}>
                    <Text style={styles.textoStyleTres}>
                        Ligar
                    </Text>
                    <ReuseIcon name='call' color="orange" size={40} />
                   </TouchableOpacity>
               </View>
               <View style={styles.boxStyleDois}>
                   <View>
                       <Text style={styles.textoStyleUm}>PAGAMENTO</Text>
                       <Text style={styles.textoStyleUm}>TOTAL</Text>
                       <Text style={styles.textoStyleUm}>TROCO</Text>
                       <Text style={styles.textoStyleUm}>ENTREGA</Text>
                   </View>
                   <View style={{ marginLeft: 30 }}>
                       <Text style={styles.textoStyleDois}>DINHEIRO</Text>
                       <Text style={styles.textoStyleDois}>R$ {this.props.cartValue + this.state.frete}</Text>
                       <Text style={styles.textoStyleDois}>R$ 12,10</Text>
                       <Text style={styles.textoStyleDois}>Estrada velha de água fria, 102</Text>
                   </View>
               </View>
             </View>
        );
    }
}

const mapStateToProps = (state) => ({
    cart: state.cart,
    cartValue: state.cartItems.cartValue
  });

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
    boxStyleDois: {
        backgroundColor: 'white',
        marginTop: 1,
        marginBottom: 7,
        marginHorizontal: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'flex-start'
    },
    textStyle: {
        color: 'orange',
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginLeft: 5  
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
        fontSize: 13, 
        marginRight: 3, 
        alignSelf: 'center', 
        fontWeight: 'bold', 
        marginLeft: 80
    }
  };

export default connect(mapStateToProps)(CardUsuario);