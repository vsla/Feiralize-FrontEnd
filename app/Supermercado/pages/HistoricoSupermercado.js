import React, { Component } from 'react';
import { Text, View, StyleSheet,TouchableOpacity  } from 'react-native';
import { isUserWhitespacable } from '@babel/types';
import ReuseIcon from '../components/ReuseIcon';

export default class  HistoricoSupermercado extends Component{
    render(){
        return(
            <View style={{flex:0.8}}>
                {/*Nome da pagina, que fica na parte laranja no topo. */}
                <View style={style.header}>
                    <Text style={style.textHeader}>
                        Historico
                    </Text>
                </View>
                {/*Lista de pedidos feitos ao restaurante */}              
                <View style={{flex:1}} >
                   <View style={style.listaStyle}>
                        {/*hora,dia,mês */}
                        <View style={style.dataStyle}>
                            <Text style={style.diaStyle}>20</Text>
                            <Text>Maio</Text>
                            <Text style={style.horaStyle}>13:30 - 14:30</Text>
                        </View>
                        {/*Nome, endereço,forma de pagamento do cliente,qnt de itens qque foi pedido */}                
                        <View style={style.enderecoStyle}>
                            <Text style={style. clienteStyle}>MARIA EDUARADA VERÇOSA</Text>
                            <Text>Av. Conde da boa vista,número 250,apt 305</Text>
                            <Text>30 itens</Text>
                            <View style={style.statusStyle}>
                                <Text>Dinheiro no ato da entrega</Text>
                                <Text style={style.finalizadoStyle}>FINALIZADO</Text>
                            </View>
                        </View>                        
                    </View>
                    <View style={style.listaStyle}>
                    {/*hora,dia,mês */}
                       <View style={style.dataStyle}>
                            <Text style={style.diaStyle}>21</Text>
                            <Text>Maio</Text>
                            <Text style={style.horaStyle}>13:30 - 14:30</Text>
                        </View>
                        {/*Nome, endereço,forma de pagamento do cliente,qnt de itens qque foi pedido */}                          
                        <View style={style.enderecoStyle}>
                            <Text style={style. clienteStyle}>CHIU YONG</Text>
                            <Text>Av. Conde da boa vista,número 250,apt 305</Text>
                            <Text>30 itens</Text>
                            <View style={style.statusStyle}>
                                <Text>Dinheiro no ato da entrega</Text>
                                <Text style={style.finalizadoStyle}>FINALIZADO</Text>
                            </View>
                        </View>
                    </View>    
                        <View style={style.listaStyle}>
                        {/*hora,dia,mês */}
                            <View style={style.dataStyle}>
                                <Text style={style.diaStyle}>20</Text>
                                <Text>Maio</Text>
                                <Text style={style.horaStyle}>13:30 - 14:30</Text>
                            </View>
                            {/*Nome, endereço,forma de pagamento do cliente,qnt de itens qque foi pedido */}                         
                            <View style={style.enderecoStyle}>
                                <Text style={style. clienteStyle}>RODRIGO VERÇOSA</Text>
                                <Text>Av. Conde da boa vista,número 250,apt 305</Text>
                                <Text>30 itens</Text>
                                <View style={style.statusStyle}>
                                     <Text>Dinheiro no ato da entrega</Text>
                                     <Text style={style.finalizadoStyle}>FINALIZADO</Text>
                                </View>
                            </View>            
                        </View>                    
                </View>                
            </View>
        );
    }


}

const style= StyleSheet.create({

    listaStyle:{ 
        flexDirection: 'row',
        borderBottomWidth:1,
        borderBottomColor: '#eeeeee',
        padding:5,        
    },
    header:{ 
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        backgroundColor:'darkorange',
        elevation:10,
    },
    textHeader:{ 
        fontSize:40,
        color:'white',
        marginBottom: 20,
        marginLeft: 20,
    },
    horaStyle:{//uando
        fontSize:12,
    },    
    enderecoStyle:{ 
        justifyContent:'center',
        paddingTop:10,        
    },
     clienteStyle:{ 
        fontWeight:'bold',
        paddingBottom:5,    
    },
    statusStyle:{ 
        flexDirection:'row',
        marginTop:5,
        color:'white',
    },    
    finalizadoStyle:{ 
        paddingLeft:10,
        backgroundColor:'#DCDCDC',
        borderRadius:15,
        color: 'white',
        marginLeft:10,
        height:20,
        width:95,
    },
    diaStyle:{ 
        fontSize: 35,
        fontWeight:'bold',
    },
    dataStyle:{ 
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#eeeeee',
        borderRadius:10,
        padding:10,
        marginRight:10,
    },  

})
