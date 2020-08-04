import React from 'react';
import { NavLink } from 'react-router-dom';

import back from '../../assets/images/icons/back.svg';
import logo from '../../assets/images/logo.svg';

import { Container, HeaderContent } from './styles';

interface IProps {
  title: string;
}

const Header: React.FC<IProps> = ({ title, children }) => {
  return (
    <Container>
      <div>
        <NavLink to="/">
          <img src={back} alt="Voltar" />
        </NavLink>

        <img src={logo} alt="Proffy" />
      </div>

      <HeaderContent>
        <strong>{title}</strong>

        {children}
      </HeaderContent>
    </Container>
  );
};

export default Header;
