import React, { Component } from 'react';
import {
  GradientView,
  CenteredView,
  SectionView,
  FeiralizeLogo,
  AuthInput,
  AuthButton,
  FacebookButton
} from '../components/auth';

class Authentication extends Component {
  //Button Method
  renderButton() {
    return (
      <AuthButton>
        Entrar
      </AuthButton>
    );
  }

  renderFbButton() {
    return (
      <FacebookButton
        iconName="logo-facebook"
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
              onChangeText={null}
              value={null}
            />
          </SectionView>

          <SectionView>
            <AuthInput 
              iconName="finger-print"
              placeholder="Senha"
              onChangeText={null}
              value={null}
              secureTextEntry
            />
          </SectionView>

          <SectionView>
            {this.renderButton()}
          </SectionView>

          <SectionView>
            {this.renderFbButton()}
          </SectionView>

        </CenteredView>
      </GradientView>  
    );  
  }
}

export default Authentication;
