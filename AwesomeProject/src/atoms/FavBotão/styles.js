import React from "react";
import styled from "styled-components/native"
import { Banco, CinzaClaro2 } from "../color";

export const UserFavButton = styled.TouchableOpacity`
       width: 40px;
       height: 40px;
       background-color: ${Banco};
       border: 2px solid ${CinzaClaro2};
       border-radius: 20px;
       justify-content: center;
       align-items: center;
       margin-top: 20px;
       margin-left: 20px;
       margin-right: 20px;
`;