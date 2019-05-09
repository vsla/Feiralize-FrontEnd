import React, { Component } from "react";
import { View, Text, FlatList, TextInput, TouchableOpacity } from "react-native";
import { Overlay } from 'react-native-elements';
import ReuseIcon from "../components/ReuseIcon";
import data from '../assets/data/products.json'
import ItemCard from '../components/ItemCard';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: data,
      error: null,
      array: "",
      fullData: [],
      showModal: false
    };
  }
  showModal = () => {
    this.setState({ showModal: true })
  }

  handleSearch = text => {
    if (text) {
      const formatedArray = text.toLowerCase();
      var fullData = this.state.data.map(item => {
        const formatedItem = item.title.toLowerCase()
        if (formatedItem.includes(formatedArray)) {
          return (item)
        }
      })
      this.setState({ fullData: fullData })
    } else {
      this.setState({ fullData: [] })
    }
  }

  render() {
    return (
      <View style={style.viewStyle}>
        < View style={style.headerStyle} >
          < TouchableOpacity style={{ marginLeft: 20 }} onPress={() => this.props.navigation.navigate("ListaProduto")}>
            <ReuseIcon
              name="arrow-back"
              color='white'
              size={30}
            />
          </TouchableOpacity>
          <View style={style.inputStyle}>
            <TextInput style={style.textStyle}
              placeholder="Buscar item" onChangeText={this.handleSearch}
              placeholderTextColor='white'
            />
            < ReuseIcon
              name="search"
              color='white'
              size={30}
            />
          </ View>
        </ View>
        <View style={{ flex: 1 }}>
          <FlatList
            data={this.state.fullData}
            style={style.flatStyle}
            numColumns={2}
            keyExtractor={item => item.title}
            renderItem={({ item }) =>
              <ItemCard data={item} showModal={this.showModal} />}
          />
          <Overlay
            isVisible={this.state.showModal}
          >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity
                onPress={() => {
                  this.setState({ showModal: false })
                }}
              >
                <Text>Voltar</Text>
              </TouchableOpacity>
            </View>
          </Overlay>
        </View>
      </View>
    );
  }
}

const style = {
  containerStyle: {
    flex: 1,
    margin: 10,
    borderRadius: 5,
    borderColor: 'white',
    shadowColor: 'gray',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
  },
  viewStyle: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerStyle: {
    flex: 0.15,
    flexDirection: "row",
    backgroundColor: 'darkorange',
    justifyContent: "space-between",
    alignItems: 'center',
  },
  inputStyle: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 20
  },
  textStyle: {
    fontSize: 20,
    color: 'white',
    marginRight: 10,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingVertical: 10,
    marginLeft: 10,
  }
}
