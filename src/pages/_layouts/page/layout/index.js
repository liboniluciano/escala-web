import React from 'react';

import MenuLateral from '../../../../components/MenuLateral';

import { Container, Content, TitleContent } from './styles';

export default function Layout({ children, title }) {
  return (
    <Container>
      <MenuLateral />
      <TitleContent>{title}</TitleContent>
      <Content>{children}</Content>
    </Container>
  );
}
