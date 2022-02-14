import React from 'react';
import { createNativeStackNavigator} from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default () => (
  <Stack.Navigator
   initialRouteName='Preload'
   screenOptions={{
     headerShown: false
   }}
  ></Stack.Navigator>
)