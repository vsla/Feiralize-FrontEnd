import React, { Component } from "react";
import { View, Image, TouchableHighlight, Text, Alert } from 'react-native';


class Login extends Component {
    render() {
        return (
            <View style={style.Container}>

                <View style={style.Encontrados}>
                    <Text style={{
                        color: 'slategray',
                        fontSize: 11,
                    }}>Econtrados 35 de 40 produtos</Text>
                </View>

                <View style={style.Mercado}>
                    <Image
                        style={style.imageStyle}
                        source={require('../assets/data/images/walmart.jpg')}
                    >
                    </Image>
                    <View>
                        <Text style={{
                            color: 'slategray',
                            fontSize: 10,
                            marginLeft: '50%',
                            marginTop: 20
                        }}>
                            Valor total
                        </Text>
                        <Text style={{
                            color: 'slategray',
                            fontSize: 16,
                            marginBottom: 13.6,
                            marginLeft: '48%'
                        }}>
                            R$ 68,00
                        </Text>
                    </View>
                </View>

                <View style={{
                    flexDirection: 'row',
                    marginRight: 36,
                    marginBottom: 2,
                    marginLeft: 10
                    }}>
                    <Text style={{
                        color: 'slategray',
                        fontSize: 12,
                    }}>Feira R$62,90</Text>
                    <Text style={{
                        color: 'slategray',
                        fontSize: 12,
                        marginLeft: '44.5%',
                    }}>Frete R$5,10</Text>                
                </View>

                <View style={{
                    flexDirection:'row',
                    marginLeft: 10,
                    marginRight: 16.1,
                    marginBottom: 4.7,
                    justifyContent: 'space-between'
                    }}>
                    <TouchableHighlight
                        backgroundColor='slategray'
                        onPress={() => Alert.alert("Não implementado!")}>
                        <Text style={{
                            color: 'orange',
                            fontSize: 13.3,
                            textDecorationLine: 'underline'
                        }}>
                                Detalhar preços
                        </Text>
                    </TouchableHighlight>    
                    <Text style={{
                        color: 'slategray',
                        fontSize: 12,
                    }}>Entrega em 2 dias</Text>            
                </View>                              

                <View style={style.BuyButton}>
                    <TouchableHighlight
                        onPress={() => Alert.alert("Não implementado!")}>
                        <Text style={style.Texto}>
                                COMPRAR
                        </Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}
export default Login;

const style = {
    Container: {
        backgroundColor: 'whitesmoke',
        width: '87%',
        height: '63%',
        borderRadius: 5.3,
        Opacity: '79%',
        shadowColor: 'black',
        shadowRadius: 5,
        shadowOffset: { width:1, height:1 }
    },
    Encontrados: {
        backgroundColor: 'whitesmoke',
        width: '51.2%',
        height: 8,
        borderRadius: 5.3,
        Opacity: '79%',
        marginLeft: 10.7,
        marginTop: 10.4,
        marginBottom: 6.6
    },
    Mercado: {
        alignSelf: 'center',
        backgroundColor: 'white',
        width: '93.8%',
        height: '34%',
        borderRadius: 5.3,
        marginTop: 6.6,
        marginLeft: 6.7,
        marginRight: 6.8,
        marginBottom: 8.4,
        flexDirection: 'row'
    },
    imageStyle: {
        height: '42.4%',
        width: '39.8%',
        marginLeft: 10.7,
        marginTop: 22
    },
    BuyButton: {
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green',
        borderRadius: 5.3,
        height: '19.8%',
        width: '93.8%',
        marginLeft: 6.7,
        marginRight: 6.7,
        marginTop: 6
    },

    Texto: {
        color: 'white',
        fontSize: 18
    }
 }