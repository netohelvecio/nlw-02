import React from 'react';
import Header from '../../Components/Header';
import Input from '../../Components/Input';

import { Container, Form } from './styles';

const TeacherForm: React.FC = () => {
  return (
    <Container>
      <Header
        title="Que incrível que você
  quer dar aulas."
        description="O primeiro passo, é preencher esse
  formulário de inscrição."
      />

      <Form>
        <fieldset>
          <legend>Seus dados</legend>

          <Input label="Nome completo" id="name" type="text" />

          <Input label="Avatar" id="avatar" type="text" />

          <Input label="Whatsapp" id="whatsapp" type="text" />
        </fieldset>
      </Form>
    </Container>
  );
};

export default TeacherForm;
