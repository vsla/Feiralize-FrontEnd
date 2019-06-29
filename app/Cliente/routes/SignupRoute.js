import { createStackNavigator } from 'react-navigation';
import GetInitialLocation from '../pages/signUp/GetInitialLocation';
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
      screen: GetInitialLocation,
      navigationOptions: () => ({
        header: null,
      })
    }
  }
)
export default SignUpRoute;
