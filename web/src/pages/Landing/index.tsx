import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { NavLink } from 'react-router-dom';

import api from '../../services/api';
import { ITotalConnections } from '../../utils/types';

import logo from '../../assets/images/logo.svg';
import landing from '../../assets/images/landing.svg';

import study from '../../assets/images/icons/study.svg';
import giveClasses from '../../assets/images/icons/give-classes.svg';
import purpleHearth from '../../assets/images/icons/purple-heart.svg';

import { Container, Content, LogoContainer, ButtonContainer } from './styles';

const Landing: React.FC = () => {
  const [connectionsTotal, setConnectionsTotal] = useState(0);

  useEffect(() => {
    api
      .get<ITotalConnections>('connections')
      .then(response => setConnectionsTotal(response.data.total))
      .catch(err => {
        console.log(err.message);

        toast.error(
          err.message || 'Erro ao fazer contagem do total de conexões',
        );
      });
  }, []);

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
          Total de {connectionsTotal} conexões já realizadas
          <img src={purpleHearth} alt="Coração roxo" />
        </span>
      </Content>
    </Container>
  );
};

export default Landing;
