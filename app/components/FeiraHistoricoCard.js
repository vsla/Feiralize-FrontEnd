import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, ProgressBarAndroid} from 'react-native'
import ReuseIcon from './ReuseIcon';
import * as Progress from 'react-native-progress';


export default class FeiraHistoricoCard extends Component {
    /*
        Esse component renderiza a tela de histórico de produtos
        Abaixo dessa classe tem a barra de progresso usada no downSpace quando se é selecionado a feira

        A função pressed verifica se ele foi pressionado, mudando seu estado
        ShowInfo mostra o espaço dentro do card, sendo renderizado apenas se this.state.selected for true
    */
    constructor(props){
        super(props);
        this.state ={
            selected: false,
            progress: 0
        }
    }
    pressed = () => {
        this.state.selected == true ?  this.setState({selected:false}) : this.setState({selected:true})
    }
    showInfo = () =>{
        /*
            Aqui temos a progress bar e o botão de ver feira
        */
         if (this.state.selected == true){
            return(
                <View style={{marginBottom:15}}>
                    <View style={{ marginHorizontal:'20%', marginVertical:15}}>
                        <ProgressBar progress={this.state.progress}/>
                        <View style={{backgroundColor:'white', height:12, width:12,borderRadius:100, position:'absolute', top:'33%', left:'48%'}}/>
                    </View>
                    <TouchableOpacity
                        style={style.verFeiraButton}
                        onPress={() => {this.setState({progress:this.state.progress + 0.25})}}
                    >
                        <Text style={{color:'white', fontSize:20}}>Ver Feira</Text>
                    </TouchableOpacity>
                </View>
            )
        }else{
            // Se não for selecionado, não aparece o botão
            return(<View/>)
        }
    }
    
    render() {
        return (
            <View >
                <TouchableOpacity
                    style={{flexDirection:'row', alignItems:'center', paddingVertical:10, marginLeft:10}}
                    onPress={() => {this.pressed()}}
                >
                    <View style={style.finishedContainerIcon}>
                        <ReuseIcon
                            name={'checkmark'}
                            color={'white'}
                            size={25}
                        />
                    </View>
                    <View style={style.textContainer}>
                        <Text style={{fontSize:16}}>82 Produtos</Text>
                        <Text style={{fontSize:14}}>24/01/2018</Text>
                    </View>
                    <View style={style.arrowContainer}>
                        <ReuseIcon
                            name={this.state.selected ? 'arrow-up' : 'arrow-down' }
                            color={'black'}
                            size={26}
                        />
                    </View>
                </TouchableOpacity>
                <View style = {{flex:1, borderBottomWidth: 1,borderBottomColor: 'black', marginHorizontal:10}}/>
                
                {this.showInfo()}
            </View>
        )
        
    }
}
class ProgressBar extends Component {
    /*
        Aqui vai a progress bar 
    */
  render() {
    return (
        <View style={{
            paddingVertical: 10,
            marginHorizontal:30
        }}>
            <Progress.Bar
                progress={this.props.progress}
                color={'darkorange'}
                unfilledColor={'green'}
                width={null}
                height={15}
                borderColor={'transparent'}
                animationType={'timing'}
            />
        </View>
    )
  }
}

// Style do componente FeiraHistoricoCard
const style = StyleSheet.create({
    finishedContainerIcon: {
        borderRadius: 100,
        backgroundColor: 'green',
        paddingVertical:5,
        paddingHorizontal:7.5,
        margin:10
    },
    textContainer: {
        marginLeft:10
    },
    arrowContainer: {
        position: "absolute",
        right: 20,
    },
    verFeiraButton:{
        backgroundColor:'gray',
        justifyContent:'center',
        padding:10,
        marginHorizontal:'10%',
        alignItems:'center',
        borderRadius:20
    }
})
