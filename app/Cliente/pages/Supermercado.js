import React, { Component } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import firebase from 'firebase';
import SuperCard from '../components/SuperCard';


class Supermercado extends Component {
    constructor(props) {
        super(props);
        this.state = {
            supermercados: []
        };
    }
    componentDidMount() {
        /*
        firebase.firestore().collection('purchases').doc('JFMNLgNAz3eR3vJ5sDGJ').set({
            '8uvCCKrF9PIRxw5v5jtc': {
                clientID: '5EiURoXGGT3ybPRH5nEH',
                createdDate: {
                  date: '05/05/2019',
                  hour: '11:00:00 AM'
                },
                delivery: {
                  date: '06/05/2019',
                  hour: '11:00:00 AM',
                  location: {
                    cep: '51020-231',
                    neighborhood: 'Agua fria',
                    number: '1024',
                    state: 'Pernambuco',
                    street: 'estrada velha de água fria'
                  }
                },
                exchange: 50,
                paymentID: 'ErrdYOwD8VaPBBzGDkX0',
                price: 4.5,
                products: {
                  dSvDn1kqnJrFYR4M2n5w: {
                    cWCpHbvlblPzArWWWqBc: {
                      '1l': 2,
                      '500ml': 10
                    }
                  },
                  wy0kiUhqSWOMxWlkXbLi: {
                    cWCpHbvlblPzArWWWqBd: {
                      '500ml': 20
                    }
                  }
                },
                status: 'O4ugGt3SD4qVeyO6miW6',
                supermarketID: 'JFMNLgNAz3eR3vJ5sDGJ'
              },   
        });
        */
        
        firebase.firestore()
        .collection('supermarkets')
        .get()
        .then((response) => { 
            console.log(response.docs); 
            this.setState({ supermercados: response.docs });
        });
        
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <FlatList 
                    data={this.state.supermercados}
                    keyExtractor={item => item.toString()}
                    style={{ flex: 1 }}
                    renderItem={(item) => 
                    < SuperCard data={item} totalValue={this.props.cartValue} screenProps={this.props.navigation} />}
                />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state, 1);
    return {
        cartValue: state.cartItems.cartValue
    };
};

export default connect(mapStateToProps, null)(Supermercado);
