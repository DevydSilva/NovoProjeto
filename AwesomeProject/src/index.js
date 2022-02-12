import React from "react";
import {View, Text} from "react-native";
import { Container } from "./styles";
import Texto from './atoms/Texto';

import { CustomButton } from "./atoms/Botão/styles";

export default () => {
  return (
    <Container>
      <CustomButton>
      <Texto Texto="LOGIN"/>
      </CustomButton>
      

    </Container>
  )
}