import React, { useContext } from 'react';
import styled from 'styled-components/native';
import {Azul4, Banco} from '../atoms/color';

import { UserContext } from '../navegagor/contexts/UserContexts';

import HomeIcon from '../atoms/imagens/home.svg';
import SearchIcon from '../atoms/imagens/search.svg';
import TodayIcon from '../atoms/imagens/today.svg';
import FavoriteIcon from '../atoms/imagens/favorite.svg';
import AccountIcon from '../atoms/imagens/account.svg';


const TabArea = styled.View`
    height: 60px;
    background-color: ${Azul4};
    flex-direction: row;
`;
const TabItem = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
`;
const TabItemCenter = styled.TouchableOpacity`
    width: 70px;
    height: 70px;
    justify-content: center;
    align-items: center;
    background-color: ${Banco};
    border-radius: 35px;
    border: 3px solid ${Azul4};
    margin-top: -20px;
`;
const AvatarIcon = styled.Image`
    width: 24px;
    height: 24px;
    border-radius: 12px;
`;

export default ({ state, navigation }) => {
    const { state:user } = useContext(UserContext);

    const goTo = (screenName) => {
        navigation.navigate(screenName);
    }

    return (
        <TabArea>
            <TabItem onPress={()=>goTo('Home')}>
                <HomeIcon style={{opacity: state.index===0? 1 : 0.5}} width="24" height="24" fill="#FFFFFF" />
            </TabItem>
            <TabItem onPress={()=>goTo('Search')}>
                <SearchIcon style={{opacity: state.index===1? 1 : 0.5}} width="24" height="24" fill="#FFFFFF" />
            </TabItem>
            <TabItemCenter onPress={()=>goTo('Appointments')}>
                <TodayIcon width="32" height="32" fill="#4EADBE" />
            </TabItemCenter>
            <TabItem onPress={()=>goTo('Favorites')}>
                <FavoriteIcon style={{opacity: state.index===3? 1 : 0.5}} width="24" height="24" fill="#FFFFFF" />
            </TabItem>
            <TabItem onPress={()=>goTo('Profile')}>
                {user.avatar != '' ?
                    <AvatarIcon source={{uri: user.avatar}} />
                    :
                    <AccountIcon style={{opacity: state.index===4? 1 : 0.5}} width="24" height="24" fill="#FFFFFF" />
                }
            </TabItem>
        </TabArea>
    );
}