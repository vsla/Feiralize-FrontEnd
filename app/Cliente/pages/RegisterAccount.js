import React, { Component } from 'react';
import {
  GradientView,
  CenteredView,
  SectionView,
  FeiralizeLogo,
  AuthInput,
  AuthButton
} from '../components/auth';

class CadastrarConta extends Component {
  //Button Method
  renderButton() {
    return (
      <AuthButton>
        Cadastrar
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
            <AuthInput 
              iconName="finger-print"
              placeholder="Senha"
              onChangeText={null}
              value={null}
              secureTextEntry
            />
          </SectionView>

          <SectionView>
            <AuthInput 
              iconName="finger-print"
              placeholder="Confirmar Senha"
              onChangeText={null}
              value={null}
              secureTextEntry
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

export default CadastrarConta;
