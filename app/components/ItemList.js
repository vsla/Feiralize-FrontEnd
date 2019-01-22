import React, { Component } from 'react';
import { ScrollView, Text, View, FlatList, ActivityIndicator } from 'react-native';
import axios from 'axios';
import ItemDetail from './ItemDetail';

class ItemList extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            food: null,
        }
    }

    componentWillMount = () => {
        axios.get('http://rallycoding.herokuapp.com/api/music_albums')
            .then(response => 
                this.setState({ 
                    food: response.data,
                    isLoading: false
                })
            );
    }
    
    render() {
        if (this.isLoading){
            return(
                <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
                    <ActivityIndicator/>
                </View>
            )
        }
        return (
            <FlatList
                data={this.state.food}
                style={style.flatStyle}
                numColumns={2}
                keyExtractor={item => item.title}
                renderItem={({item}) =>
                        <ItemDetail key={item.title} data={item} />}
            />
        );
    }
};
export default ItemList;

const style = {
    textStyle: {
        fontSize: 18,
        color: "black",
    },
    flatStyle:{
        flex:1,
    }
};
