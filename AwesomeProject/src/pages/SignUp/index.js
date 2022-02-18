import React, { useState, useContext} from 'react';
import { useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import UserContext from '../../navegador/contexts/UserContexts';

import {Container} from './styles';
import Texto from '../../atoms/Texto';
import BotãoTextos2 from '../../atoms/BotãoTexto';
import TextoBold from '../../atoms/BotãoTextoBold';
import { InputArea } from '../../atoms/Input/styles';
import { CustomButton, SignMessageButton } from '../../atoms/Botão/styles';
import SignInput from '../../components/SignInput';

import Api from '../../Api';


import BarberLogo from '../../atoms/imagens/barber.svg';
import PersonIcon from '../../atoms/imagens/person.svg';
import EmailIcon from '../../atoms/imagens/email.sgv';
import LockIcon from '../../atoms/imagens/lock';
//import BotãoTextoBold from '../../atoms/BotãoTextoBold';

export default () => {
  const { dispotch: userDispatch } = useContext(UserContext);
  const navigation = useNavigation();

  const [nameField, setNameField] = useState('');
  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');

  const handleSignClick = async () => {
    if(nameField !=nameField != '' && emailField != '' && passwordField != '') {
      let res = await Api.signUp(nameField, emailField, passwordField);

      if(res.token) {
        await AsyncStorage.setItem('token',res.token);

        userDispatch({
          type: 'setAvatar',
          payload:{
            avatar: res.data.avatar
          }
        });

        navigation.reset({
          routes:[{name:'MainTab'}]
        });

      } else {
        alert("Erro:"+res.error);
      }
    } else {
      alert("Preencha os compos");
    }
  }

  const handleMessageButtonClick = () => {
    navigation.reset({
      routes: [{name: 'SignIn'}]
    });
  }

  
  return (
    <Container>
        <BarberLogo width="100%" height="160" />
        <InputArea>
        <SignInput
          IconSvg={PersonIcon}
          placeholder="Digite seu nome"
          value={nameField}
          onChangeText={t=>setNameField(t)} 
        />
        <SignInput
          IconSvg={EmailIcon}
          placeholder="Digite seu e-mail"
          value={emailField}
          onChangeText={t=>setEmailField(t)}
        />

        <SignInput
          IconSvg={LockIcon}
          placeholder="Digite sua senha"
          value={passwordField}
          onChangeText={t=>setPasswordField(t)}
          password={true}
        /> 
        <CustomButton onPress={handleSignClick}>
          <Texto Texto="CADASTRAR" />
        </CustomButton>
        </InputArea>
        <SignMessageButton onPress={handleMessageButtonClick}>
          <BotãoTextos2 BotãoTextos2="Já possui uma conta?" />
          <TextoBold TextoBold="Faça Login" />
        </SignMessageButton>
    </Container>
  );
  
}