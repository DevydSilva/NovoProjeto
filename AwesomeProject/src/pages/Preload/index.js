import React, {useEffect, useContext} from 'react';
import { Container, LoadingIcon } from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation} from '@react-navigation/native';


import { UserContext} from '../../navegagor/contexts/UserContexts';
import Api from '../../Api';


import BarberLogo from '../../atoms/imagens/barber.svg';

export default () => {
  const { dispotch: userDispatch } = useContext(UserContext);
  const navigation = useNavigation();

  useEffect(()=>{
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');
      if(token) {
        let res = await Api.checkToken(token);
        if(res.token) {

          await AsyncStorage.setItem('token', res.token);

          userDispatch({
            type: 'setAvatar',
            payload: {
              avatar: res.data.avatar
            }
          });
          navigation.reset({
            routes:[{name:'MainTab'}]
          });


        }else {
          navigation.navigate('SignIn');
        }
      } else {
        navigation.navigate('SignIn');
      }
    }
    checkToken();
  }, []);

  return (
    <Container>
      <BarberLogo width="100%" height="160" />
      <LoadingIcon size="large" color="#ffffff" />
    </Container>
  )
}