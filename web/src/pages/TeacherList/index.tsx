import React from 'react';

import Header from '../../Components/Header';

import { Container, Form, FieldContainer, Main } from './styles';
import TeacherCard from '../../Components/TeacherCard';

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

      <Main>
        <TeacherCard />
      </Main>
    </Container>
  );
};

export default TeacherList;
