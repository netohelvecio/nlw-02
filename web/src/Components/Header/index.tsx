import React from 'react';
import { NavLink } from 'react-router-dom';

import back from '../../assets/images/icons/back.svg';
import logo from '../../assets/images/logo.svg';

import { Container, HeaderContent } from './styles';

interface IProps {
  title: string;
  description?: string;
}

const Header: React.FC<IProps> = ({ title, description, children }) => {
  return (
    <Container>
      <div>
        <NavLink to="/">
          <img src={back} alt="Voltar" />
        </NavLink>

        <img src={logo} alt="Proffy" />
      </div>

      <HeaderContent className="header-content">
        <strong>{title}</strong>
        {description && <p>{description}</p>}

        {children}
      </HeaderContent>
    </Container>
  );
};

export default Header;
