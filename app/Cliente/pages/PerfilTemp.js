import React, { Component } from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native';
import themeStyle from "../styles/theme.style";
import ReuseIcon from '../components/ReuseIcon';
import { Avatar } from 'react-native-elements';


export default class PerfilTemp extends Component{

    render(){
        return(

            <View style = {{flex:1}}>
                <View style={style.OrangeContainer}>
                    <View>
                       
                    <Image
                           source={{ uri: 'https://dummyimage.com/200x200/b7d46f/fff'}}
                            style={style.perfilImage}
                         />

                    </View> 
                    <View style={style.containerNameStyle}>
                    <ReuseIcon name={'person'} size={25} color={'white'} />
                        <Text style={style.nameStyle}> Daniela Lima </Text>
                    </View>
                    <View style={style.containerEmailStyle}>  
                    <ReuseIcon name={'mail'} size={25} color={'white'}/>  
                        <Text style={style.emailStyle}>daniela_lima@hotmail.com</Text>
                     
                    </View>
                    <View>
                    <TouchableOpacity
					    style={style.buttonStyle}
                        onPress={() => this.props.navigation.navigate('loginRoute') }
				    >
					<Text style={{color: 'white'}}>Voltar</Text>
				</TouchableOpacity>
                        
                        
                    </View>
                    

                </View>
                <View style={style.WhiteContainer}>
                    <View>
                        <Image
                            source={{ uri: 'https://dummyimage.com/200x200/b7d46f/fff'}}
                            style={style.perfilImage}
                        />
                        
                    </View> 
                    <View style={style.sobreNoStyle}>
                        <Text style={style.titulo}>Sobre nós</Text>
                        <Text style={style.SobreStyle}>
                            O Feiralize foi fundado em 2017, 
                            o nosso foco é tornar á atividade de ir á feira mais rápida e prática para você que tem pouco tempo,
                            ou quando bater aquela preguiça de ir ao supermercado, nós levamos todos os itens de sua preferência
                            até o local indicado por você.
                        </Text>
                            
                            
                    </View>  
                </View>
            </View>
        );
       
    }

}


const style = StyleSheet.create({
    OrangeContainer:{
        flex: 2.2, 
        flexDirection: 'column',
        backgroundColor: themeStyle.BG_color, 
        justifyContent: 'space-around',
        alignItems:'center',
        marginBottom:10,
        
        
    },
    perfilImage:{
        height:75,
        width:75,
        borderRadius: 100,
        borderWidth: 1,
        marginBottom:10,
        
    },
    containerNameStyle:{
        flex: 0, 
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    containerEmailStyle:{
        flex: 0, 
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    nameStyle:{
        color:'white',
        fontWeight:'bold',
        fontSize:27,
       
    },
    WhiteContainer:{
        flex: 2.2, 
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems:'center',
    },
    SobreStyle:{
        //estilo do texto sobre nos
        color:themeStyle.BG_color, 
        fontSize:15,
        lineHeight:25,
        paddingRight:5,
        textAlign:'center',
        fontFamily: 'verdana'
    },
    sobreNoStyle:{
        flex: 2.2, 
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems:'center',
    },
    titulo:{
        //estilo do titulo sobre nos
        fontSize:25,
        color:themeStyle.BG_color, 
        fontWeight:'bold',
    },
    buttonStyle:{
        padding:10,
        backgroundColor:'#FF8C00',
       //backgroundColor:'#F4A460',
        borderRadius: 30,
        elevation: 5,

    },
    emailStyle:{
        color:'white',
       // paddingTop:10,
        paddingLeft:10,
        fontSize:20,
        fontWeight:'bold',
        
    }

    
})