import React from 'react';

import Header from '../../Components/Header';
import Input from '../../Components/Input';
import Dropzone from '../../Components/Dropzone';

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

          <Dropzone />

          <Input label="Nome completo" id="name" type="text" />

          <Input label="Whatsapp" id="whatsapp" type="text" />
        </fieldset>

        <fieldset>
          <legend>Sobre sua aula</legend>

          <Input label="Matéria" id="subject" type="text" />

          <Input label="Custo da sua hora por aula" id="cost" type="text" />
        </fieldset>
      </Form>
    </Container>
  );
};

export default TeacherForm;
