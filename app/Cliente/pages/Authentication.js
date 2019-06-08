import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { 
  emailChanged,
  passwordChanged,
  loginUser
} from '../redux/actions';
import {
  GradientView,
  CenteredView,
  SectionView,
  FeiralizeLogo,
  AuthInput,
  AuthButton,
  FacebookButton,
  Spinner
} from '../components/auth';

class Authentication extends Component {
  onEmailChange(text) {
    //Event Handler que passa o email atraves de uma action para todos os reducers.
    //Sendo que o AuthReducer q vai atender pq nele tem um case que captura esta action
    //atualiza state e salva state
    this.props.emailChanged(text);
    //retorne o novo state
    //que vai ser feito pelo mapStateToProps
  }

  onPasswordChange(password) {
    //Event Handler que passa o password 
    //atraves de uma action (index.js da action) para todos os reducers.
    //Sendo que o AuthReducer q vai atender pq nele tem um case que captura esta action
    //atualiza state e salva state
    this.props.passwordChanged(password);
    //retorne o novo state
    //que vai ser feito pelo mapStateToProps
  }

  onButtonPress() {
    //const { email, password } = this.props;
    // Loga direto no aplicativo, para fins de debug
    this.props.navigation.navigate('bottomNavigator');


    //chame o loginUser method
    //this.props.loginUser({ email, password });
  }

  //Se tiver erro
  renderError() {
    //'' == false
    //So an empty string is equal to false and a non empty string is true
    if (this.props.error) {
      return (
        <View style={{ padding: 5 }}>
          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
        </View>
      );
    }
  }

  //Button Method
  renderButton() {
    if (this.props.loading) {
      return <Spinner size='large' />;
    }
    return (
      <AuthButton 
        onPress={this.onButtonPress.bind(this)}
      >
        Entrar
      </AuthButton>
    );
  }
  
  renderFbButton() {
    if (this.props.loading) {
      return <Spinner size='large' />;
    }
    return (
      <FacebookButton
        iconName="logo-facebook"
        onPress={() => this.props.navigation.navigate('supermarket')}
      >
        Entrar com Facebook
      </FacebookButton>
    );
  }
  
  render() {
    return (
      <GradientView colors={['#FF8C03', '#FF6A03', '#FF3D00']} > 
        <CenteredView>
          
          <SectionView>
            <FeiralizeLogo />
          </SectionView>
          
          <SectionView>
            <AuthInput 
              iconName="contact"
              placeholder="Login"
              //bind this porque eh uma callback function
              //precisa passar o contexto como argumento (a string q ele ta digitando)
              onChangeText={this.onEmailChange.bind(this)}
              value={this.props.email}
            />
          </SectionView>

          <SectionView>
            <AuthInput 
              iconName="finger-print"
              placeholder="Senha"
              //bind this porque eh uma callback function
              //precisa passar o contexto como argumento (a string q ele ta digitando)
              onChangeText={this.onPasswordChange.bind(this)}
              value={this.props.password}
              secureTextEntry
            />
          </SectionView>

          {this.renderError()}
    
          <SectionView>
            {this.renderButton()}
          </SectionView>

          <SectionView>
            {this.renderFbButton()}
          </SectionView>

          <SectionView>
            <Text
              style={styles.forgotPasswordStyle}
              onPress={null}
            >
              Esqueci Senha
            </Text>

            <Text 
              style={styles.createAccountStyle}
              onPress={() => this.props.navigation.navigate('SignUpRoute')}
            >
              Criar Nova Conta
            </Text>
          </SectionView>

        </CenteredView>
      </GradientView>  
    );  
  }
}

//css
const styles = {
  createAccountStyle: {
    flex: 1,
    fontSize: 18,
    lineHeight: 23,
    color: '#FFFFFF'
  },
  forgotPasswordStyle: {
    flex: 1,
    fontSize: 18,
    lineHeight: 23,
    color: '#FFFFFF'
  },
  errorTextStyle: {
    fontSize: 18,
    alignSelf: 'center',
    color: '#FFFFFF',
    fontWeight: '600'
  }
};

//retorne o state do AuthReducer através da key 'auth' como props (objeto) para este componente
const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading
  };
};

//connect to Redux (Actions, reducers e store)
//Acesse a action emailChanged do Redux pelo LoginForm 
//LoginForm recebe emailChanged como this.props
//mapStateToProps para acessar o redux e receber novo state
export default connect(mapStateToProps, 
  {
    emailChanged, 
    passwordChanged,
    loginUser
  })(Authentication);

