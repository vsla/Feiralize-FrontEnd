import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import PagInicial from '../pages/PagInicial';
import DetalhesPedido from '../pages/DetalhesPedido';

const PedidoRoute = createStackNavigator(
  {
    PedidosHome: {
      screen: PagInicial,
      navigationOptions: () => ({
        header: null,
      })
    },
    DetalhesPedido: {
      screen: DetalhesPedido,
      navigationOptions: () => ({
        headerTitle: 'Detalhes do pedido',
        headerStyle: {
          height: 45
        },
        headerTitleStyle: {
          color: 'black',
          fontWeight: 'normal'
        }
      })
    }
  },
  {
    initialRouteName: "PedidosHome",
  }
)

export default PedidoRoute;