import React from 'react';

import Header from '../../Components/Header';

import { Container, Form, FieldContainer } from './styles';

const TeacherList: React.FC = () => {
  return (
    <Container>
      <Header title="Estes são os proffys disponíveis.">
        <Form>
          <FieldContainer>
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject" />
          </FieldContainer>

          <FieldContainer>
            <label htmlFor="week-day">Dia da semanda</label>
            <input type="text" id="week-day" />
          </FieldContainer>

          <FieldContainer>
            <label htmlFor="time">Hora</label>
            <input type="text" id="time" />
          </FieldContainer>
        </Form>
      </Header>
    </Container>
  );
};

export default TeacherList;
