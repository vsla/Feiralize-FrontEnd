import { createStackNavigator } from 'react-navigation';
import getInitialLocation from '../pages/GetInitialLocation';
import RegisterAccount from '../pages/signUp/RegisterAccount';


const SignUpRoute = createStackNavigator(
  /**
   * Navegação das telas de cadastro
   **/
  {
    SignUp: {
      screen: RegisterAccount,
      navigationOptions: () => ({
        header: null,
      })
    },
    getLocation: {
      screen: getInitialLocation,
      navigationOptions: () => ({
        header: null,
      })
    }
  }
)
export default SignUpRoute;
