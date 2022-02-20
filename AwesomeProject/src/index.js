// import React from "react";
// import {View, Text} from 'react-native'

// export default () => {
//   return (
//     <View>
//       <Text>Ola mundo</Text>
//     </View>
//   )
// }



import React from "react";
import { NavigationContainer} from '@react-navigation/native';
import UserContextProvider from './navegagor/contexts/UserContexts';
import MainStack from './navegagor/stacks/MainStack';  

export default () => {
  return(
    <UserContextProvider>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </UserContextProvider>
  )
}



