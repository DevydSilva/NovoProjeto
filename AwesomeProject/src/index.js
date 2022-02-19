import React from "react";
import { NavigationContainer} from '@react-navigation/native';

import UserContextProvider from './navegador/contexts/UserContexts';
import MainStack from './navegador/stacks/MainStack'

export default () => {
  return(
    <UserContextProvider>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </UserContextProvider>
  )
}