import React, { Component } from 'react';
import { View } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';
import { format, addDays } from 'date-fns';
import HorarioCard from '../components/HorarioCard';


class Agendamento extends Component {
  
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      route: {}
    };
  }
  componentWillMount() {
    this.setState({
      navigator: createMaterialTopTabNavigator(
        this.createRoute(),
        {
          showIcon: true,
          lazy: false,
          animationEnabled: false,
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
              margin: 0
            }
          }
        })
    });
  }

  createRoute = () => {
    const diasSemana = { 
      Sun: 'Domingo', Mon: 'Segunda', Tue: 'Terça', Wed: 'Quarta', Thu: 'Quinta', Fri: 'Sexta', Sat: 'Sábado' 
    };
    let lastDay = new Date();
    const route = {};
    for (let index = 1; index < 8; index++) {
      // Muda de sábado para segunda e de domingo para segunda
      if (format(lastDay, 'ddd') === 'Sat') {
        lastDay = addDays(lastDay, 2);
      } else if (format(lastDay, 'ddd') === 'Sun') {
        lastDay = addDays(lastDay, 1);
      }
      route[`D${index}`] = {
        screen: HorarioCard,
        navigationOptions: {
          tabBarLabel: `${format(lastDay, 'D')}\n\n${diasSemana[format(lastDay, 'ddd')]}`,
        }
      };
      lastDay = addDays(lastDay, 1);
    }
    console.log(route);
    return route;
  }
  
  render() {
    return (
      <View style={style.viewStyle}>
        <this.state.navigator screenProps={this.props}/>
      </View>
    );
  }
}
export default Agendamento;
const style = {
  viewStyle: {
    flex: 1,
  }
};
