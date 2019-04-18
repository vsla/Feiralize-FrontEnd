import { createStackNavigator } from 'react-navigation';
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
    DetalhesPedido:{
      screen: DetalhesPedido,
    }
  },
  {
    initialRouteName: "PedidosHome",
  }
)

export default PedidoRoute;