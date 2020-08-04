import React from 'react';

import whatsapp from '../../assets/images/icons/whatsapp.svg';

import { Container, HeaderCard } from './styles';

const TeacherCard: React.FC = () => {
  return (
    <Container>
      <HeaderCard>
        <img
          src="https://api.adorable.io/avatars/175/helvecio.png"
          alt="Avatar"
        />

        <div>
          <strong>Helvécio Neto</strong>
          <span>Programação</span>
        </div>
      </HeaderCard>

      <p>
        Entusiasta das melhores tecnologias de química avançada. Apaixonado por
        explodir coisas em laboratório e por mudar a vida das pessoas através de
        experiências. Mais de 200.000 pessoas já passaram por uma das minhas
        explosões.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 20,00</strong>
        </p>

        <button type="button">
          <img src={whatsapp} alt="Entrar em contato" />
          Entrar em contato
        </button>
      </footer>
    </Container>
  );
};

export default TeacherCard;
