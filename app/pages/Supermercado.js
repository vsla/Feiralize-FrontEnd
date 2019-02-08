import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native';
import SuperCard from '../components/SuperCard'
import { connect } from 'react-redux'

class Supermercado extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Supermercados:null
        }
    }
    render() {
        return (
            <View style={{flex:1, alignItems:'center'}}>
                < SuperCard totalValue = {this.props.cartValue} />
            </View>
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