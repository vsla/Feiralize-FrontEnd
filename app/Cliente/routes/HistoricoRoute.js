import { createStackNavigator } from 'react-navigation';
import HistoricoCliente from '../pages/HistoricoCliente';
import Acompanhe from '../pages/Acompanhe';

const HistoricoRoute = createStackNavigator(
  /**
   * Navegação das telas de histórico
   **/
  {
    Historico: {
      screen: HistoricoCliente,
      navigationOptions: () => ({
        header: null,
      })
    },
    Acompanhamento: {
      screen: Acompanhe,
      navigationOptions: () => ({
        header: null,
      })
    }
  },
  {
    initialRouteName:'Historico'
  }
)
export default HistoricoRoute;
