import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { isUserWhitespacable } from '@babel/types';

export default class  HistoricoCliente extends Component{
    render(){
        return(
            <View style={{flex:1}}>
                <View style={style.header}>
                    <Text style={style.textHeader}>
                        Historico 
                    </Text>
                </View>              
                <View style={{flex:1}} >            
                    <View style={style.listaStyle}>                        
                        <View style={style.dataStyle}>                        
                            <Text style={style.diaStyle}>20</Text>
                            <Text>Maio</Text>
                            <Text style={style.horaStyle}>13:30 - 14:30</Text>
                        </View>                        
                        <View style={style.enderecoStyle}>
                            <Text style={style.marketStyle}>BOMPREÇO</Text>
                            <Text>Av. Conde da boa vista,número 250,apt 305</Text>
                            <Text>30 itens</Text>
                            <View style={style.statusStyle}>
                                <Text>Dinheiro no ato da entrega</Text>
                                <Text style={style.pendenteStyle}>PENDENTE</Text>
                            </View>
                        </View>                        
                    </View>
                    <View style={style.listaStyle}>                        
                        <View style={style.dataStyle}>                        
                            <Text style={style.diaStyle}>20</Text>
                            <Text>Maio</Text>
                            <Text style={style.horaStyle}>13:30 - 14:30</Text>
                        </View>                        
                        <View style={style.enderecoStyle}>
                            <Text style={style.marketStyle}>BOMPREÇO</Text>
                            <Text>Av. Conde da boa vista,número 250,apt 305</Text>
                            <Text>30 itens</Text>
                            <View style={style.statusStyle}>
                                <Text>Dinheiro no ato da entrega</Text>
                                <Text style={style.emPreparoStyle}>EM PREPARO</Text>
                            </View>
                        </View>
                    </View>    
                        <View style={style.listaStyle}>                        
                            <View style={style.dataStyle}>                        
                                <Text style={style.diaStyle}>20</Text>
                                <Text>Maio</Text>
                                <Text style={style.horaStyle}>13:30 - 14:30</Text>
                            </View>                        
                            <View style={style.enderecoStyle}>
                                <Text style={style.marketStyle}>BOMPREÇO</Text>
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
    listaStyle:{  
        flexDirection: 'row',
        borderBottomWidth:1,
        borderBottomColor: '#eeeeee',
        padding:5,        
    },
    horaStyle:{  
        fontSize:12,
    },    
    enderecoStyle:{  
        justifyContent:'center',
        paddingTop:10,        
    },
    marketStyle:{  
        fontWeight:'bold',
        paddingBottom:5,       
    },
    statusStyle:{  
        flexDirection:'row',
        marginTop:5,
        color:'white',
    },
    pendenteStyle:{  
        paddingLeft:10,
        backgroundColor:'green',
        borderRadius:15,
        color: 'white',
        marginLeft:10,
        height:20,
        width:90,
    },   
    emPreparoStyle:{  
        paddingLeft:5,       
        backgroundColor:'#FFD700',
        borderRadius:15,
        color: 'white',
        marginLeft:10,
        height:20,
        width:95,
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
    diaStyle: {  
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
