/* eslint-disable max-len */
/* eslint-disable no-undef */
import React, { Component } from 'react';
import { View, Text, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import CardStatus from '../components/CardStatus';
import CardUsuario from '../components/CardUsuario';
import CardProduto from '../components/CardProduto';
import ReuseIcon from '../components/ReuseIcon';

class Acompanhe extends Component {
    static navigationOptions = {
        title: 'Acompanhe',
      };
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
          value: this.props.cartValue,
          frete: 0
        };
      }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.headerStyle}>
                    <TouchableOpacity
                        onPress={() => { this.props.navigation.navigate('Historico'); }}                     
                        style={{ marginLeft: 20 }}
                    >
                        <ReuseIcon
                        name="arrow-back"
                        color='white'
                        size={30}
                        />
                    </TouchableOpacity>
                    <Text style={{ color: 'white', marginLeft: 20, fontSize: 22 }}>Acompanhe seu pedido</Text>
                </View>
                <ScrollView>
                    <View style={{ flex: 1 }}>
                        <CardStatus />
                        <CardUsuario />
                        <View>
                            <View style={styles.boxStyle}>
                                <Text style={styles.textStyle}>PRODUTOS</Text>
                            </View>
                            <View style={styles.boxStyleDois}>
                                <View style={{ marginRight: 30, flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                    <Text style={styles.textoStyleUm}>QNT</Text>
                                    <Text style={styles.textoStyleUm}>DESCRIÇÃO</Text>
                                    <Text style={styles.textoStyleUm}>PREÇO</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <FlatList
                                        data={this.props.cart}
                                        keyExtractor={item => item.name}
                                        renderItem={({ item, index }) =>
                                            <CardProduto item={item} index={index} />}
                                    />
                                </View>
                            </View>
                            <View style={styles.boxStyleTres}>
                                <View>
                                    <Text style={styles.textoStyleUm}>SUBTOTAL</Text>
                                    <Text style={styles.textoStyleUm}>FRETE</Text>
                                    <Text style={styles.textoStyleUm}>TOTAL</Text>
                                </View>
                                <View style={{ marginLeft: 30 }}>
                                    <Text style={styles.textoStyleDois}>R$ {this.props.cartValue}</Text>
                                    <Text style={styles.textoStyleDois}>R$ {this.state.frete}</Text>
                                    <Text style={styles.textoStyleTres}>R$ {this.props.cartValue + this.state.frete}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    cart: state.cartItems.cart,
    cartValue: state.cartItems.cartValue
  });

  const styles = {
    headerStyle: {
        flexDirection: 'row',
        backgroundColor: 'darkorange',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 3,
        height: 50
    },
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
        marginHorizontal: 10,
        padding: 10,
    },
    boxStyleTres: {
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

export default connect(mapStateToProps)(Acompanhe);
