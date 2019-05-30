import { createStackNavigator } from 'react-navigation';
import LoginEmail from '../pages/loginEmail';
import SignUpRoute from '../routes/SignupRoute';

const LoginRoute = createStackNavigator(
  /**
   * Navegação das telas de login
   * Depois do login feito, volta-se a navegação para o initalRoute
   * E troca para o bottomNavigator
   **/
  {
    loginEmail: {
      screen: LoginEmail,
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
