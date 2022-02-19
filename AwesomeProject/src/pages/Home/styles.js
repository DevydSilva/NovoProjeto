import React from 'react';
import styled from 'styled-components/native';
import { azul, Azul4 } from '../../atoms/color';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${azul};
`;

export const Scroller = styled.ScrollView`
    flex: 1;
    padding: 20px;
`;

export const HeaderArea = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
export const LocationArea = styled.View`
    background-color: ${Azul4};
    height: 60px;
    border-radius: 30px;
    flex-direction: row;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 30px;
`;
export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 50px;
`;
export const ListArea = styled.View`
    margin-top: 30px;
    margin-bottom: 30px;
`;