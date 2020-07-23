import React from 'react';

import { NavLink } from 'react-router-dom';

import { Container, Content } from './styles';

function MenuLateral() {
  return (
    <Container>
      <Content>
        <li>
          <NavLink to="/volunteer">Teste</NavLink>
        </li>
        <li>Grupos</li>
        <li>Funções</li>
      </Content>
    </Container>
  );
}

export default MenuLateral;
