import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/cart';

class CardProduto extends Component {
    render() {
        return (
             <View style={styles.boxStyle}>
                <Text style={styles.textStyle}>{this.props.item.name}</Text>
                <Text style={styles.textStyle}>{this.props.item.price}</Text>
             </View>
        );
    }
}

const styles = {
    boxStyle: {
        backgroundColor: 'white',
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    textStyle: {
        color: 'grey',
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 3
    }
  };

export default connect(null, actions)(CardProduto);
