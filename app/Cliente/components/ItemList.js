import React, { Component } from 'react';
import { ScrollView, Text, View, FlatList, ActivityIndicator, Alert } from 'react-native';
import axios from 'axios';
import ItemCard from './ItemCard';
import { connect } from 'react-redux'
import CartScreen from '../pages/Carrinho'
import * as actions from "../redux/actions/action";
class ItemList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            fullData: [],
            routeName: this.props.navigation.state.routeName,
            data: []
        }
    }
    
    componentWillMount = () => {
        axios.get('https://feiralize-api.herokuapp.com/products')
            .then(response =>{
                const data = []
                const originalArray = response.data
                for (var index in originalArray) {
                    if (originalArray[index].type == this.state.routeName) {
                        data.push(originalArray[index])
                    }
                }
                this.setState({ 
                    fullData: response.data,
                    data: data,
                    isLoading: false
                })
            }
            )
            .catch(error => {})
        //Verifica qual produto é de cada tela
        
   }
   /*
   componentDidMount() {
       
       // Coloca no estado
       this.setState({
           data: data,
           isLoading: false
       })
   }*/
    
    render() {
        if (this.state.isLoading){
            return(
                <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
                    <ActivityIndicator color='black'/>
                </View>
            )
        }else{
            console.log(this.state)
        return (
            <FlatList
                data={this.state.data}
                style={style.flatStyle}
                numColumns={2}
                keyExtractor={item => item.title}
                renderItem={({item}) =>
                    <ItemCard data={item}/>}
            />
        );
        }
    }
}

export default connect(null, actions)(ItemList); 

const style = {
    textStyle: {
        fontSize: 18,
        color: "black",
    },
    flatStyle:{
        flex:1,
    }
};
