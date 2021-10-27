// import React from 'react';
import { 
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp
} from "react-icons/md";

import { 
  Container, 
  Header,
  LogImg,
  MenuContainer,
  MenuItemLink,
  Title,
} from './styles';

import logoImg from '../../assets/logo.svg'

const Aside: React.FC = () => {
  return (
    <Container>
      <Header>
        <LogImg src={logoImg} alt="Logo minha finanças"/>
        <Title>Minha Carteira</Title>
      </Header>
      <MenuContainer>
        <MenuItemLink href="/dashboard">
           <MdDashboard/>
            DashBoard
        </MenuItemLink>

        <MenuItemLink href="/list/entry-balance">
          <MdArrowUpward/>
            Entradas
        </MenuItemLink>

        <MenuItemLink href="/list/exit-balance">
          <MdArrowDownward/>
            Saidas
        </MenuItemLink>

        <MenuItemLink href="#">
          <MdExitToApp/>
            Sair
        </MenuItemLink>

      </MenuContainer>
    </Container>
  );
};


export default Aside;