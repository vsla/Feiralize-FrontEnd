import React, { Component } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import SuperCard from '../components/SuperCard'

class Supermercado extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Supermercados:[1]
        };
        console.log(this.props, 1);
    }
    render() {
        return (
            <View style={{flex:1}}>
                <FlatList 
                    data={this.state.Supermercados}
                    keyExtractor={item => item.toString()}
                    style={{ flex: 1 }}
                    renderItem={() => 
                    < SuperCard totalValue={this.props.cartValue} screenProps={this.props.navigation} />}
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
