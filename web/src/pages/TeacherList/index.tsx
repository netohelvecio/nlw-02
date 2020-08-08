import React from 'react';

import Header from '../../Components/Header';
import { Input } from '../../Components/Input';
import Select from '../../Components/Select';

import { Container, Form, Main } from './styles';
import TeacherCard from '../../Components/TeacherCard';
import { subjectOptions, weekDayOptions } from '../../utils/helpers';

const TeacherList: React.FC = () => {
  return (
    <Container>
      <Header title="Estes são os proffys disponíveis.">
        <Form>
          <Select label="Matéria" id="subject" options={subjectOptions} />

          <Select
            label="Dia da semana"
            id="week-day"
            options={weekDayOptions}
          />

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
