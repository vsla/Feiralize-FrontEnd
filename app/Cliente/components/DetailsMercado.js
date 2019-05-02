import React, { Component } from "react";
import { View, Image, Text } from 'react-native';


class DetailsMercado extends Component {
    render() {
        return (
            <View style={style.Container}>
                <View>
                    <Text style={{
                        color: 'slategray',
                        fontSize: 12,
                        marginTop: 8,
                        marginLeft: 8
                    }}>
                        Valor total dos produtos
                    </Text>
                    <Text style={{
                        color: 'slategray',
                        fontSize: 18,
                        marginLeft: 8
                    }}>
                        R$ {this.props.totalValue}
                    </Text>
                </View>
                <Image
                    style={style.imageStyle}
                    source={require('../assets/data/images/walmart.jpg')}
                >
                </Image>
            </View>
        );
    }
}
export default DetailsMercado;

const style = {
    Container: {
        flex:1,
        backgroundColor: 'whitesmoke',
        width: '87%',
        height: '63%',
        borderRadius: 5.3,
        Opacity: '79%',
        shadowColor: 'black',
        shadowRadius: 5,
        shadowOffset: { width:1, height:1 },
        alignSelf:'center',
        marginVertical:15,
        flexDirection: 'row'
    },
    Encontrados: {
        flex:1,
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
        flex: 0.8,
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
        flex: 1,
        height: 30,
        width: 40,
        marginTop: 10,
        marginLeft: 25,
        marginRight: 8
    },
    BuyButton: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green',
        borderRadius: 5.3,
        marginHorizontal: 30,
        marginVertical:6
    },

    Texto: {
        color: 'white',
        fontSize: 18,
        paddingVertical:10
    }
 }
