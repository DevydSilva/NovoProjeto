import React from "react";
import {View, Text} from "react-native";
import { Container } from "./styles";
import Texto from './atoms/Texto';
import BotãoTextos2 from './atoms/BotãoTexto';
import TextoBold from './atoms/BotãoTextoBold';
import SignInput from './components/SignInput';

import EmailIcon from './atoms/imagens/email.svg';
import LockIcon from './atoms/imagens/lock.svg';

import { CustomButton, SignMessageButton } from "./atoms/Botão/styles";
import { InputArea } from "./atoms/Input/styles";


export default () => {

  
  return (
    <Container>
      <InputArea>
      <SignInput
       IconSvg={EmailIcon}
       placeholder="Digite seu e-mail" 
      />
      <SignInput
        IconSvg={LockIcon}
        placeholder="Digite sua senha" 
      />

      
      <CustomButton>
      <Texto Texto="LOGIN"/>
      </CustomButton>
      </InputArea>
      
      <SignMessageButton>
        <BotãoTextos2 BotãoTextos2="Ainda não possui uma conta?" />
        <TextoBold TextoBold="Cadastre-se" />
      </SignMessageButton>
      

    </Container>
  )
}