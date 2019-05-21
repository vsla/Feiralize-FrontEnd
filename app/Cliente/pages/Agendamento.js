import React, { Component } from "react";
import { View, Text } from "react-native";
import DataTabNav from '../routes/DataNav'
import HorarioCard from '../components/HorarioCard';
import { createMaterialTopTabNavigator } from 'react-navigation';
import { format, addDays } from 'date-fns';

class Agendamento extends Component {
  constructor(props){
    super(props);
    this.state = {
      route: {
        "D1": {
          screen: HorarioCard,
          navigationOptions: {
            tabBarLabel: 'hoje',
          }
        },
        "D2": {
          screen: HorarioCard,
          navigationOptions: {
            tabBarLabel: 'segunda',
          }
        },
        "D3": {
          screen: HorarioCard,
          navigationOptions: {
            tabBarLabel: 'Hoje',
          }
        }
      },
    }
  }
  static navigationOptions = {
    title: 'Agendamento',

  };

  createRoute = () => {
    const diasSemana = {'Sun':'Domingo', 'Mon':'Segunda', 'Tue':'Terça', 'Wed':'Quarta', 'Thu':'Quinta', 'Fri': 'Sexta', 'Sat':'Sábado'}
    var lastDay = new Date()
    var route = {}
    for (let index = 1; index < 8; index++) {
      // Muda de sábado para segunda e de domingo para segunda
      if (format(lastDay, 'ddd') == 'Sat') {
        lastDay = addDays(lastDay, 2)
      } else if (format(lastDay, 'ddd') == 'Sun') {
        lastDay = addDays(lastDay, 1)
      }
      route['D' + index] = {
        screen: HorarioCard,
        navigationOptions: {
          tabBarLabel: format(lastDay, 'D') + '\n\n' + diasSemana[format(lastDay, "ddd")],
        }
      }
      lastDay = addDays(lastDay,1)
    }
    console.log(route)
    return route
  }
  componentWillMount() {
    this.setState({
      navigator: createMaterialTopTabNavigator(
        this.createRoute(),
        {
          showIcon:true,
          lazy: false,
          animationEnabled:false,
          tabBarOptions: {
            activeTintColor: 'white',
            inactiveTintColor: 'grey',
            scrollEnabled: true,
            style: {
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 1,
              height: 120,
              paddingTop: 1,
              paddingBottom: 1,
              backgroundColor: 'orange'
            },
            indicatorStyle: {
              height: 0
            },
            tabStyle: {
              borderColor: 'grey',
              borderWidth: 1,
              width: 90
            },
            labelStyle: {
              fontSize: 15,
              fontWeight: 'bold',
              margin:0
            }
          }
        })
    })
  }
  render() {
    return (
      <View style={style.viewStyle}>
        <this.state.navigator />
      </View>
    );
  }
}
export default Agendamento
const style = {
  viewStyle: {
    flex: 1,
  }
}

/*import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import ReuseIcon from "../components/ReuseIcon";
import DataCard from "../components/DataCard";
import HorarioCard from "../components/HorarioCard"

class Agendamento extends Component {
  static navigationOptions = {
    title: 'Agendamento',

  };
  ***
          < View style={style.headerStyle} >
          < TouchableOpacity style={{ marginLeft: 35 }} onPress={() => this.props.navigation.navigate("Compra")}>
            <ReuseIcon
              name="arrow-dropleft"
              color='grey'
              size={30}
            />
          </TouchableOpacity>
          <Text style={style.textStyle}>Agendar entrega</Text>
        </View>
  ***
  render() {
    return (
      <View style={style.viewStyle}>
        <DataCard/>
        <HorarioCard navigation={this.props.navigation}/>
      </View>
    );
  }
}
export default Agendamento
const style = {
  viewStyle: {
    flex: 1,
  },
  headerStyle: {
    height: 60,
    flexDirection: "row",
    backgroundColor: 'white',
    justifyContent: "flex-start",
    alignItems: 'center',
    marginBottom: 40
  },
  textStyle: {
    fontSize: 18,
    color: 'grey',
    marginLeft: 25,
    fontWeight: 'bold'
  }
}
*/