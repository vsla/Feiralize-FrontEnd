import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import ReuseIcon from '../components/ReuseIcon';
import { connect } from 'react-redux';
import * as actions from "../redux/actions/action";
class Pagamento extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPressed: null,
            selected: null
        }
    }
    confirmarCompra = () =>{
        if (this.state.selected){
            
            Alert.alert(
                'Confirmar compra de R$ ' + this.props.cartValue,
                '',
                [
                    {
                        text: 'Cancelar',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                    },
                    {
                        text: 'OK',
                        onPress: () => this.props.add_payment_method(this.state.selected)
                    },
                ],
            );
        }
    }
    render() {
        return (
            <View style={style.screenContainer}>
                <View style={{flex:1.3, flexDirection: "row", justifyContent:'space-evenly', alignItems: 'center'}}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.pop()}
                     >
                            <ReuseIcon
                                name={"arrow-back"}
                                size={25}
                                color={"#ec7416"}
                            />
                    </TouchableOpacity>
                    < Text style={style.pagamentoText}> Pagamento </Text>
                    <Text style={{alignSelf:"flex-end", marginRight: 40, fontSize:16}}>
                        Valor: R$ {this.props.cartValue}
                    </Text>
                </View>
                <MetodoPagamento parentState={this}/>
                <View style={{flex:1, marginHorizontal: 30}}>
                    <TouchableOpacity 
                    style={style.confirmarBut} onPress={() =>this.confirmarCompra()}
                    >
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
export default connect(mapStateToProps, actions)(Pagamento);
class MetodoPagamento extends Component{
    showIcon = (id) => {
        if (id === this.props.parentState.state.isPressed) {
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
                this.props.parentState.setState({
                    isPressed: 1,
                    selected: 'Online com cartão de crédito'
                })
                break;
            case 2:
                this.props.parentState.setState({
                    isPressed: 2,
                    selected: 'Crédito/Débito no ato da entrega'
                })
                break;
            case 3:
                this.props.parentState.setState({
                    isPressed: 3,
                    selected: 'Dinheiro no ato da entrega'
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
        backgroundColor:"#ffffff",
        alignItems:'stretch',
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
        bottom: 20,
        right: 20,
        paddingHorizontal:10,
        paddingVertical:5
    }
})