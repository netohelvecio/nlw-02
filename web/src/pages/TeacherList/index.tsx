import React from 'react';

import Header from '../../Components/Header';
import Input from '../../Components/Input';

import { Container, Form, FieldContainer, Main } from './styles';
import TeacherCard from '../../Components/TeacherCard';

const TeacherList: React.FC = () => {
  return (
    <Container>
      <Header title="Estes são os proffys disponíveis.">
        <Form>
          <Input label="Matéria" id="subject" type="text" />

          <Input label="Dia da semana" id="week-day" type="text" />

          <Input label="Hora" id="time" type="time" />
        </Form>
      </Header>

      <Main>
        <TeacherCard />
      </Main>
    </Container>
  );
};

export default TeacherList;
