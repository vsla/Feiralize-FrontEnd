import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import CardStatus from '../components/CardStatus';
import CardUsuario from '../components/CardUsuario';
import CardProduto from '../components/CardProduto';

class Acompanhe extends Component {
    static navigationOptions = {
        title: 'Acompanhe',
      };
    render() {
        return (
            <ScrollView>
                <View style={{ flex: 1 }}>
                    <CardStatus />
                    <CardUsuario />
                    <CardProduto />
                </View>
            </ScrollView>
        );
    }
}

export default Acompanhe;
