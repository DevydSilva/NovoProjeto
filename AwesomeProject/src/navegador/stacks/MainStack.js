import React from 'react';
import { createNativeStackNavigator} from '@react-navigation/native-stack';

import Preload from '../../pages/Preload';
import SignIn from '../../pages/SignIn';
import SignUp from '../../pages/SignUp';
import MainTab from '../stacks/MainTab';
import Barder from '../../pages/Barber';

const Stack = createNativeStackNavigator();

export default () => (
  <Stack.Navigator
   initialRouteName='Preload'
   screenOptions={{
     headerShown: false
   }}
  >
    <Stack.Screen name='Preload' component={Preload} />
    <Stack.Screen name='SignIn' component={SignIn} />
    <Stack.Screen name='SignUp' component={SignUp} />
    <Stack.Screen name='MainTab' component={MainTab} />
    <Stack.Screen name='Barber' component={Barder} />
  </Stack.Navigator>
)