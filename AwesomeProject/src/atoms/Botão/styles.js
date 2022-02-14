import React from "react";
import styled from 'styled-components/native';
import {Azul2, azul} from '../color';

export const Container = styled.SafeAreaView`
      background-color: ${azul};
      flex: 1;
      justify-content: center;
      align-items: center;
`;

export const CustomButton = styled.TouchableOpacity`
     height: 60px;
     background-color: ${Azul2};
     border-radius: 30px;
     justify-content: center;
     align-items: center;
`;

export const SignMessageButton = styled.TouchableOpacity`
      flex-direction: row;
      justify-content: center;
      margin-top: 50px;
      margin-bottom: 20px;
`;

