import React, { Component } from 'react';
import {
  GradientView,
  CenteredView,
  SectionView,
  FeiralizeLogo,
  AuthInput,
  AuthButton
} from '../components/auth';

class ForgotPassword extends Component {
  //Button Method
  renderButton() {
    return (
      <AuthButton>
        Enviar
      </AuthButton>
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
              iconName="mail"
              placeholder="Email"
              onChangeText={null}
              value={null}
            />
          </SectionView>

          <SectionView>
            {this.renderButton()}
          </SectionView>

        </CenteredView>
      </GradientView>  
    );  
  }
}

export default ForgotPassword;
