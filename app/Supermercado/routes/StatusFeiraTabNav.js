import { createMaterialTopTabNavigator } from 'react-navigation';
import Pedidos from '../pages/Pedidos';


const StatusFeiraTabNav = createMaterialTopTabNavigator(
    {
        TODOS: {
            screen: Pedidos,
            navigationOptions: {
                tabBarLabel: 'TODOS',
            }
        },
        PENDENTE: {
            screen: Pedidos,
            navigationOptions: {
                tabBarLabel: 'PENDENTES',
            }
        },
        'EM PREPARO': {
            screen: Pedidos,
            navigationOptions: {
                tabBarLabel: 'EM PREPARO',
            }
        },
        'EM ENTREGA': {
            screen: Pedidos,
            navigationOptions: {
                tabBarLabel: 'EM ENTREGA',
            }
        },
        FINALIZADO: {
            screen: Pedidos,
            navigationOptions: {
                tabBarLabel: 'FINALIZADO',
            }
        },
    },
    {
        tabBarOptions: {
            activeTintColor: 'green',
            inactiveTintColor: 'grey',
            scrollEnabled: true,
            labelStyle: {
                fontSize: 12,
                fontWeight: 'bold',
                margin: 0
              },
            style: {
                backgroundColor: 'white'
            },
            indicatorStyle: {
                height: 4,
                backgroundColor: 'green',
            },
        }
    }
);

export default StatusFeiraTabNav;
