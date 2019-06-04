import { createStackNavigator } from 'react-navigation';
import SignUpRoute from '../routes/SignupRoute';
import Authentication from '../pages/Authentication';

const LoginRoute = createStackNavigator(
  /**
   * Navegação das telas de login
   * Depois do login feito, volta-se a navegação para o initalRoute
   * E troca para o bottomNavigator
   **/
  {
    loginEmail: {
      screen: Authentication,
      navigationOptions: () => ({
        header: null,
      })
    },
    SignUpRoute: {
      screen: SignUpRoute,
      navigationOptions: () => ({
        header: null,
      })
    }
  }
);
export default LoginRoute;
