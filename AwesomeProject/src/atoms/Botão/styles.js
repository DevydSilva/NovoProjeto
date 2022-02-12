import React from "react";
import styled from 'styled-components/native';
import {Banco} from '../color';

export const Container = styled.SafeAreaView`
      background-color: #63C2D1;
      flex: 1;
      justify-content: center;
      align-items: center;
`;

export const CustomButton = styled.TouchableOpacity`
     height: 60px;
     width: 150px;
     background-color: ${Banco};
     border-radius: 30px;
     justify-content: center;
     align-items: center;
`;