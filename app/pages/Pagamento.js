import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import ReuseIcon from '../components/ReuseIcon';
import { connect } from 'react-redux';

class Pagamento extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={style.screenContainer}>
                <View style={{flex:1.3, justifyContent:'center', alignItems: "stretch", marginHorizontal: 30,}}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.pop()}
                        style={{position:'absolute', left:-20}}   
                     >
                            <ReuseIcon
                                name={"arrow-back"}
                                size={25}
                                color={"#ec7416"}
                            />
                    </TouchableOpacity>
                    < Text style={style.pagamentoText}> Pagamento </Text>
                    <Text>Valor: {this.props.cartValue}</Text>
                </View>
                <MetodoPagamento/>
                <View style={{flex:1, marginHorizontal: 30}}>
                    <TouchableOpacity style={style.confirmarBut}>
                            <Text style={{color:'white', fontSize:18}}>CONFIRMAR COMPRA</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        cartValue: state.cartValue
    }
}
export default connect(mapStateToProps)(Pagamento);
class MetodoPagamento extends Component{
    constructor(props){
        super(props);
        this.state={
            isPressed1:false,
            isPressed2:false,
            isPressed3:false,
        }
    }
    showIcon = (id) => {
        if (
            (id === 1 && this.state.isPressed1) || (id === 2 && this.state.isPressed2) || (id === 3 && this.state.isPressed3)
            ) {
            return(
                <View 
                style={style.iconContainer}>
                    <ReuseIcon 
                        name={"checkmark"}
                        color={"white"}
                        size={30}
                    />
                </View>
            )
        }
    }
    onPress = (id) => {
        // Faz a verificação de qual botão está sendo pressionado e coloca no state
        switch (id) {
            case 1:
                this.setState({
                    isPressed1: true,
                    isPressed2: false,
                    isPressed3: false,
                })
                break;
            case 2:
                this.setState({
                    isPressed1: false,
                    isPressed2: true,
                    isPressed3: false,
                })
                break;
            case 3:
                this.setState({
                    isPressed1: false,
                    isPressed2: false,
                    isPressed3: true,
                })
                break;
        }
    }
    
    render(){
        return(
            <View style={{flex:5.5, justifyContent:"space-between", marginHorizontal: 30, }}>
                <TouchableOpacity style={style.butMetodoPagamentoStyle} onPress={() => this.onPress(1)}>
                    <Text style={{marginHorizontal:18, marginVertical:20, fontSize:17}}>
                        Online com cartão de crédito
                    </Text>
                    {this.showIcon(1)}
                </TouchableOpacity>
                <TouchableOpacity style={style.butMetodoPagamentoStyle} onPress={() => this.onPress(2)}>
                    <Text style={{marginHorizontal:18, marginVertical:20, fontSize:17}}>
                        Crédito/Débito no ato da entrega
                    </Text>
                    {this.showIcon(2)}
                </TouchableOpacity>
                <TouchableOpacity style={style.butMetodoPagamentoStyle} onPress={() => this.onPress(3)}>
                    <Text style={{marginHorizontal:18, marginVertical:20, fontSize:17}}>
                        Dinheiro no ato da entrega
                    </Text>
                    {this.showIcon(3)}
                </TouchableOpacity>
            </View>
        )
    }
}

const style = StyleSheet.create({
    screenContainer:{
        flex: 1, 
        backgroundColor:"#ffffff"
    },
    pagamentoText:{
        color:"#ec7416",
        fontSize:35,
    },
    butMetodoPagamentoStyle:{
        flex:1,
        flexDirection:"row",
        alignItems:"flex-start",
        elevation:5,
        borderRadius: 15, 
        backgroundColor: '#f7f7f7',
        marginVertical:10,
    },
    confirmarBut:{
        flex:1,
        marginVertical:10,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#59c06e",
        borderRadius:15
    },
    iconContainer: {
        backgroundColor: "#12a931",
        borderRadius: 100,
        position: 'absolute',
        top: 10,
        right: 20,
        paddingHorizontal:10,
        paddingVertical:5
    }
})