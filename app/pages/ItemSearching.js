import React, { Component } from "react";
import { View, Text, FlatList,  ActivityIndicator, SafeAreaView, TextInput, ImageBackground, TouchableHighlight, TouchableOpacity,StyleSheet } from "react-native";
import _ from 'lodash'
import { getFood, contains } from "../components/SearchHelp";
import ReuseIcon from "../components/ReuseIcon";

class FlatListItem extends Component {
  constructor(props){
    super(props),
    this.state = {
        pressed: false,
        buttonStyle: {backgroundColor:'white'},
    }
  }
  buttonPressed = () =>{
    console.log(this.state)
    //this.props.onPress(this.props.data);
    this.setState({
        pressed: true,
        buttonStyle: {backgroundColor:'#31ff26'}
    });
    console.log(this.state)
  }

  render() {
    return (
      <View style={style.containerStyle}>
        <TouchableOpacity
          onPress={() => this.buttonPressed()}
          disabled={this.state.pressed}
          style={{flex:1}}>
          <View style={this.state.buttonStyle}>
            <ImageBackground
              source={{uri: 'https://raw.githubusercontent.com/wedeploy-examples/supermarket-web-example/master/ui/assets/images/' + this.props.item.filename}}
              style={{height: 100, width: '100%', opacity: 0.6, flex: 1}}
            >
              <View style={{backgroundColor:"orange", opacity:1, borderRadius:100, position:'absolute', padding:10}}>
                <ReuseIcon
                  name={'add'}
                  color={'white'}
                  size={20}
                />
              </View>
            </ImageBackground>
          </View>
        </TouchableOpacity>
        <View style={style.textContainer}>
          <Text>{this.props.item.title}</Text>
        </View>
      </View>
    );
  }
}
export default class App extends Component {
  renderHeader = () => {
    return (
      <View style={style.viewStyle}>
                < View style = {style.headerStyle} >
                    < TouchableHighlight style={{marginLeft: 20}} onPress={() => this.props.navigation.navigate("Compra")}>
                        <ReuseIcon
                            name="arrow-back"
                            color='white'
                            size={30}
                        />
                    </TouchableHighlight>
                    <View style={style.inputStyle}>
                        <TextInput style={style.textStyle}
                            placeholder="Buscar item" onChangeText={this.handleSearch}
                            placeholderTextColor='white'
                        />
                        < ReuseIcon
                        name = "search"
                        color = 'white'
                        size = {30}
                        />
                    </View>
                </View>
            </View>
    )
  };

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      error: null,
      query: "",
      fullData: [],
    };
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    this.setState({ loading: true });

    getFood(20, this.state.query)
      .then(produtos => {
        this.setState({
          loading: false,
          data: produtos,
          fullData: produtos,
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };

  handleSearch = text => {
      const formatQuery = text.toLowerCase();
      const data = _.filter(this.state.fullData, produto => {
          return contains(produto, formatQuery);
      });
      this.setState({ query: formatQuery, data }, () => this.makeRemoteRequest());
  }

  render() {
    return (
      <SafeAreaView>
        <FlatList
          data={this.state.data}
          numColumns={2}
          renderItem={({ item, index }) => (
            <FlatListItem item={item} index={index}></FlatListItem>)}
          keyExtractor={item => item.title}
          ListHeaderComponent={this.renderHeader}
        />             
      </SafeAreaView>
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
    shadowOffset: {width: 2,height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
  },
  viewStyle: {
      flex: 1,
      backgroundColor: 'white',
  },
  headerStyle:{
      flex: 0.18, 
      flexDirection: "row", 
      backgroundColor: 'darkorange', 
      justifyContent: "space-between", 
      alignItems: 'center',
  },
  inputStyle: {
      flex:2,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      marginRight:20
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
