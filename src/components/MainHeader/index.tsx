import React, { useMemo } from 'react';
import { 
  Container,
  Profile,
  Welcome,
  UserName
 } from './styles';

import Togg from '../Togg';
import emojis from '../../utils/emojis'

const MainHeader: React.FC = () => {

  const emoji = useMemo(() => {
    const indice = Math.floor(Math.random() * emojis.length);
    return emojis[indice];
  }
  ,[])

  return (
    <Container>
      <Togg/>
      <Profile>
          <Welcome>Olá, {emoji}</Welcome>
          <UserName> Adriano Menezes</UserName>
        </Profile>
    </Container>
  );
};


export default MainHeader;