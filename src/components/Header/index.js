import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Container, Content, Profile } from './styles';

import logo from '../../assets/logo.svg';

export default function Header() {
  const profile = useSelector((state) => state.user.profile);

  console.tron.log(profile.url);

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">Casa de Oração</Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Luciano Liboni</strong>
              <Link to="/">Meu Perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Luciano Liboni"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
