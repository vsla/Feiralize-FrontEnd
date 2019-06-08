/* eslint-disable quotes */
import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Alert } from 'react-native';
import theme from '../styles/theme.style';

export default class Inicio extends Component {
	componentDidMount() {
		/**
		 * firestore.collection('categories').doc().get()
		.then((querySnapshot) => {
			console.log(querySnapshot.docs[0]);
			querySnapshot.forEach((oi) => {
				console.log(oi.data());
			});
		})
		 */
	}

	render() {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch', backgroundColor: 'white' }}>
				<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: 0, backgroundColor: 'white' }}>
					<Text style={style.textStyle}>Faça sua feira</Text>
				</View>
				
				<View style={{ flex: 3, alignItems: 'center', justifyContent: 'center', marginHorizontal: 30, marginBottom: 15 }}>
					<FeiraButton text="Adicionar produtos ao carrinho" linkTo="ShoppingRoute" navigate={this.props.navigation.navigate} />
				</View>
			</View>
		);
	}
}

class FeiraButton extends Component {
	render() {
		if (this.props.linkTo != '') {
			return (
				// Ainda falta colocar o link para a tela desejada
				<TouchableOpacity
					style={style.buttonStyle}
					onPress={() => { this.props.navigate(this.props.linkTo); }}
				>
					<Text style={style.textButton}>{this.props.text}</Text>
				</TouchableOpacity>
			);
		} 
			return (
				<TouchableOpacity
					style={style.buttonStyle}
					onPress={() => Alert.alert('Não implementado!')}
				>
					<Text style={style.textButton}>{this.props.text}</Text>
					<Text style={{ fontSize: 18, textAlign: 'center', color: 'red', marginVertical: 5 }}>Não Implementado ainda!!!!!</Text>
				</TouchableOpacity>
			);
	}
}

const style = {
	buttonStyle: {
		backgroundColor: '#efefef',
		padding: 30,
		justifyContent: 'center',
		borderRadius: 40,
		elevation: 4,
	},
	textButton: {
		fontSize: 18,
		textAlign: 'center',
	},
	textStyle: {
		textAlign: 'left',
		color: theme.BG_color,
		fontSize: 40,
		marginLeft: 0,
		backgroundColor: 'white'
	}
};
