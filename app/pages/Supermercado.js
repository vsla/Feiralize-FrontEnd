import React, { Component } from 'react'
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import SuperCard from '../components/SuperCard'
import { connect } from 'react-redux'

class Supermercado extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Supermercados:[1,2,3]
        };
        console.log(this.props.screenProps)
    }
    render() {
        return (
             <FlatList 
                data={this.state.Supermercados}
                keyExtractor={item => item.toString()}
                style={{flex:1}}
                renderItem={() => 
                < SuperCard totalValue = {this.props.cartValue} screenProps={this.props.screenProps}/>}
            />
        )
    }
}
const mapStateToProps = (state) => {
    return {
        cartValue: state.cartValue
    }
}
export default connect(mapStateToProps)(Supermercado);

/*
            <FlatList 
                data={this.state.Supermercados}
                keyExtractor={item => item.toString()}
                renderItem={() => 
                <SuperCard totalValue={this.props.cartValue}/>}
            />
*/