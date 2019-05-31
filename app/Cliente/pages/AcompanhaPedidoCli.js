import React, { Component } from 'react';
import { Text, View, ScrollView,StyleSheet} from 'react-native';
import { isUserWhitespacable, genericTypeAnnotation } from '@babel/types';
import ReuseIcon from '../components/ReuseIcon';

export default class  AcompanhaPedidoCli extends Component{
    render(){
        return(
            <ScrollView>
                <View style={style.header}>
                    <Text style={style.textHeader}>
                        Acompanhe seu Pedido
                    </Text>
                </View>
                {/*container do detalhes da entrega e do pedido*/}
                <View style={{backgroundColor:'#EBEBEC'}}>
                    {/*detalhe da entrega */}
                        {/*Container status do pedido */}
                    <View style ={style.barraStatusStyle}>
                        <View style={style.statusPedidoStyle}>
                            <View style={{marginRight:40,paddingLeft:30}}>                       
                                <Text style = {style.textoDoisStyle}>STATUS</Text>
                            </View>
                            <View >
                                <Text style = {style.statusStyle}>AGUARDANDO SUPERMERCADO</Text> 
                            </View>
                        </View>
                        {/*Container data de solicitacao e agendamento */}
                        <View style={style.agendamentoStyle}>
                            <View>    
                                <Text style = {style.textoStyle}>AGENDADO PARA</Text>
                            </View>
                            <View style={style.colunaDoisStyle}>
                                <Text style={style.dataStyle}>14 DE MAIO - 13:30 / 14:30</Text>
                            </View>     
                        </View>
                    </View>
                    <View style={style.contEntregaStyle}>
                        <View style={style.clienteStyle}>
                            {/*Nome do cliente */}
                            <View style={style.circuloStyle}>
                            </View>
                                 <Text style={style.nomeStye}>MERCANDELLI</Text>
                            <View style={style.telefoneStyle}>
                                <Text style={style.ligarStye}>LIGAR</Text>
                                <ReuseIcon name={'call'} size={40} color={'darkorange'} />
                            </View>    
                        </View>
                           {/*Endereco do cliente  e forma de pagamento*/}
                        <View style={style.containerPgtoStyle}>
                            <View style={{marginRight:10,}}>
                                <Text style={style.textPgtoUmStyle}>PAGAMENTO</Text>
                                <Text style={style.textPgtoUmStyle}>TOTAL</Text>
                                <Text style={style.textPgtoUmStyle}>TROCO</Text>
                                <Text style={style.textPgtoUmStyle}>ENTREGA</Text>
                            </View> 
                            <View>
                                <Text style={style.textPgtoDoisStyle}>DINHEIRO</Text>
                                <Text style={style.textPgtoDoisStyle}>R$68,90</Text>
                                <Text style={style.textPgtoDoisStyle}>R$12,10</Text>
                                <Text style={{fontWeight: 'bold',}}>
                                    Estrada velha de aguas frias
                                 </Text>
                                 <Text style={{fontWeight: 'bold',}}>   
                                    1029, arruda, bloco 3, apt02.                           
                                </Text>
                            </View> 
                        </View>{/*container fomra de pagamento*/}
                    </View>{/*container entrega*/}
                    {/*container detalhe da compra*/}
                    <View style={style.containerProdutoStyle}>
                        <View style={style.continerTituloStyle}>
                            <Text style={style.tituloProdutoStyle}>PRODUTOS</Text>
                        </View> 
                        <View style={style.contDetalhesPedidoStyle}>   
                            <View>
                                <Text style={style.textPgtoUmStyle}>QUANTIDADE</Text>
                                <Text>01</Text>
                                <Text>03</Text>
                                <Text>02</Text>
                                <Text>01</Text>
                                <Text>01</Text>
                                <Text>01</Text>
                            </View>
                            <View>
                                <Text style={style.textPgtoUmStyle}>DESCRIÇÃO</Text>
                                <Text>BOLO</Text>
                                <Text>REFRIGERANTE</Text>
                                <Text>FEIJÃO</Text>
                                <Text>ARROZ</Text>
                                <Text>MACARRÃO</Text>
                                <Text>BISCOITO OREO</Text>
                            </View>
                            <View>
                                <Text style={style.textPgtoUmStyle}>PREÇO</Text>
                                <Text>R$ 5,00</Text>
                                <Text>R$ 5,00</Text>
                                <Text>R$ 5,00</Text>
                                <Text>R$ 5,00</Text>
                                <Text>R$ 5,00</Text>
                                <Text>R$ 5,00</Text>
                            </View>
                        </View>{/*envolve só os produtos */}
                        <View style={style.contSubtotalStyle}>
                            <View style={style.tituloSubtotalStyle}>
                                <Text style={style.textPgtoUmStyle}>SUBTOTAL</Text>
                                <Text style={style.textPgtoUmStyle}>FRETE</Text>
                                <Text style={style.textPgtoUmStyle}>TOTAL</Text>
                            </View>
                            <View>
                                <Text style={style.textPgtoDoisStyle}>R$ 10,00</Text>
                                <Text style={style.textPgtoDoisStyle}>R$ 5,00</Text>
                                <Text style={{color:'darkorange'}}>R$ 15,00</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>

        );
    }

} 



const style = StyleSheet.create({

    header:{  
        
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        backgroundColor:'darkorange',
        elevation: 10,
    },
    textHeader:{ 
        fontSize:25,
        color:'white',
        marginBottom: 20,
        marginLeft: 20,
    },   
    statusStyle:{ 
        paddingLeft:15,
        paddingTop:4,
        backgroundColor:'red',
        borderRadius:15,
        color: 'white',
        marginRight:-80,
        height:28,
        width:250,
        fontWeight:'bold',
    },
    barraStatusStyle:{  
        backgroundColor:'white',
        marginTop:5,        
    },
    statusPedidoStyle:{ 
        height:60,
        borderBottomWidth:1,
        borderColor:'#C0C0C0',
        flexDirection: 'row',
        alignItems:'center',
    },
    textoStyle:{ 
        fontWeight:'bold',
        fontSize:15,
        color:'grey',       
    },
    textoDoisStyle:{  
        fontWeight:'bold',
        fontSize:15,
        color:'grey',      
    },
    dataStyle:{ 
        color:'#000000',
        fontWeight: 'bold',   
    },   
    colunaDoisStyle:{ 
        flexDirection: 'column',
        paddingBottom:30,    
    },
    agendamentoStyle:{ 
        height:50,
        paddingTop:10,
        paddingRight:20,
        flexDirection: 'row',
        justifyContent:'space-evenly',       
    },
    contEntregaStyle:{  
       backgroundColor:'white',
        borderRadius:20,
        borderWidth:1,
        marginTop:10,
        marginLeft:10,
        marginRight:10,
       borderColor:'white',
        elevation: 5,
    },
    clienteStyle:{ 
        borderBottomWidth:1,
        flexDirection: 'row',
        height:50,
        alignItems:'center',
        borderColor:'#C0C0C0',
    },
    nomeStye:{ 
        color: 'darkorange',
        fontWeight: 'bold',
        fontSize:20,        
    },
    circuloStyle:{  
        borderWidth:1,
        borderRadius:20,
        height:30,
        width:30,
        marginRight:10,
        marginLeft:10,
        borderColor:'#C0C0C0',
    },
    containerPgtoStyle:{ 
        flexDirection:'row',
        paddingTop:20,
        paddingBottom:20,
        paddingLeft:10,
    },    
    textPgtoUmStyle:{ 
        paddingBottom:5,
        color:'#000000',
        fontWeight: 'bold',
    },
    textPgtoDoisStyle:{ 
        paddingBottom:5,
        fontWeight: 'bold',
    },    
    containerProdutoStyle:{ 
        backgroundColor:'white',
        borderRadius:20,
        borderWidth:1,
        margin:10,
        borderColor:'white',
        elevation: 5,
    },
    tituloProdutoStyle:{ 
        color: 'darkorange',
        fontWeight: 'bold',
        fontSize:20,
    },
    continerTituloStyle:{ 
        borderBottomWidth:1,
        borderColor:'#C0C0C0',
        height:40,
        alignItems:'center',
        paddingTop:5,    
    },
    contDetalhesPedidoStyle:{ 
       flexDirection:'row',
       borderBottomWidth:1,
       borderColor:'#C0C0C0',
       justifyContent:'space-between',
       padding:10,
       paddingBottom:10,
       height:'auto',
    },
    contSubtotalStyle:{ 
        flexDirection:'row',
        justifyContent:'flex-end',
        paddingRight:15,
        borderRadius:15,
        paddingTop:5,
    },
    tituloSubtotalStyle:{ 
        marginRight:20,
    },
    telefoneStyle:{ 
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        marginLeft:80,
    },
    ligarStye:{ 
        color: 'darkorange',
        fontWeight: 'bold',
        fontSize:12,
        marginRight:10,    
    },
    
    
})