import React, { Component } from "react";
import { View, Text } from "react-native";
import DataTabNav from '../routes/DataNav'

class Agendamento extends Component {
  static navigationOptions = {
    title: 'Agendamento',

  };
  render() {
    return (
      <View style={style.viewStyle}>
        <DataTabNav/>
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