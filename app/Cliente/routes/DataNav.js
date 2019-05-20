import { createMaterialTopTabNavigator } from 'react-navigation';
import HorarioCard from '../components/HorarioCard'

const DataTabNav = createMaterialTopTabNavigator(
    {
        "D1": {
            screen: HorarioCard,
            navigationOptions: {
                tabBarLabel: 'Hoje',
            }
        },
        "D2": {
            screen: HorarioCard,
            navigationOptions: {
                tabBarLabel: 'Hoje',
            }
        },
        "D3": {
            screen: HorarioCard,
            navigationOptions: {
                tabBarLabel: 'Hoje',
            }
        },
        "D4": {
            screen: HorarioCard,
            navigationOptions: {
                tabBarLabel: 'Hoje',
            }
        },
        "D5": {
            screen: HorarioCard,
            navigationOptions: {
                tabBarLabel: 'Hoje',
            }
        },
        "D6": {
            screen: HorarioCard,
            navigationOptions: {
                tabBarLabel: 'Hoje',
            }
        },
        "D7": {
            screen: HorarioCard,
            navigationOptions: {
                tabBarLabel: 'Hoje',
            }
        }
    },
    {
        lazy: true,
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
                fontSize: 18,
                fontWeight: 'bold'
            }
        }
    }
);

export default DataTabNav;