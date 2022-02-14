import React from "react";
import {View, Text} from "react-native";
import { Container } from "./styles";
import Texto from './atoms/Texto';
import BotãoTextos2 from './atoms/BotãoTexto';
import TextoBold from './atoms/BotãoTextoBold';

import { CustomButton, SignMessageButton } from "./atoms/Botão/styles";
export default () => {
  return (
    <Container>
      <CustomButton>
      <Texto Texto="LOGIN"/>
      </CustomButton>
      <SignMessageButton>
        <BotãoTextos2 BotãoTextos2="Ainda não possui uma conta?" />
        <TextoBold TextoBold="Cadastre-se" />
      </SignMessageButton>
      

    </Container>
  )
}