import { createStackNavigator } from 'react-navigation';
import getInitialLocation from '../pages/signUp/getInitialLocation';
import SignUp from '../pages/SignUp';


const SignUpRoute = createStackNavigator(
  /**
   * Navegação das telas de cadastro
   **/
  {
    SignUp: {
      screen: SignUp,
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
