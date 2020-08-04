import React from 'react';

import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import landing from '../../assets/images/landing.svg';

import study from '../../assets/images/icons/study.svg';
import giveClasses from '../../assets/images/icons/give-classes.svg';
import purpleHearth from '../../assets/images/icons/purple-heart.svg';

import { Container, Content, LogoContainer, ButtonContainer } from './styles';

const Landing: React.FC = () => {
  return (
    <Container>
      <Content>
        <LogoContainer>
          <img src={logo} alt="Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </LogoContainer>

        <img src={landing} className="hero-image" alt="Plataforma de estudos" />

        <ButtonContainer>
          <NavLink to="/study" className="study">
            <img src={study} alt="Estudar" />
            Estudar
          </NavLink>

          <NavLink to="/give-classes" className="give-classes">
            <img src={giveClasses} alt="Dar aulas" />
            Dar aulas
          </NavLink>
        </ButtonContainer>

        <span>
          Total de 200 conexões já realizadas
          <img src={purpleHearth} alt="Coração roxo" />
        </span>
      </Content>
    </Container>
  );
};

export default Landing;
