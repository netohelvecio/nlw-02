import React, { useState } from 'react';

import Header from '../../Components/Header';
import { Input, InputMask, CurrencyInput } from '../../Components/Input';
import InputTextArea from '../../Components/InputTextArea';
import Select from '../../Components/Select';
import Dropzone from '../../Components/Dropzone';

import {
  subjectOptions,
  weekDayOptions,
  numberMask,
} from '../../utils/helpers';
import { ISchedulesItems } from '../../utils/types';

import warning from '../../assets/images/icons/warning.svg';

import { Container, Form, ScheduleItem, Footer } from './styles';

const TeacherForm: React.FC = () => {
  const [scheduleItem, setScheduleItem] = useState<ISchedulesItems[]>([
    { week_day: null, from: '', to: '' },
  ]);

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

          <InputMask
            mask={numberMask}
            label="Whatsapp"
            id="whatsapp"
            type="text"
          />

          <InputTextArea label="Biografia" id="bio" />
        </fieldset>

        <fieldset>
          <legend>Sobre sua aula</legend>

          <Select label="Matéria" id="subject" options={subjectOptions} />

          <CurrencyInput
            label="Custo da sua hora por aula"
            id="cost"
            type="text"
          />
        </fieldset>

        <fieldset>
          <legend>
            Horários disponíveis
            <button
              type="button"
              onClick={() =>
                setScheduleItem([
                  ...scheduleItem,
                  { week_day: null, from: '', to: '' },
                ])
              }
            >
              + Novo horário
            </button>
          </legend>

          {scheduleItem.map((item, index) => (
            <ScheduleItem key={index}>
              <Select
                label="Dia da semana"
                id="week-day"
                options={weekDayOptions}
              />

              <Input label="Das" id="from" type="time" />

              <Input label="Até" id="to" type="time" />
            </ScheduleItem>
          ))}
        </fieldset>

        <Footer>
          <p>
            <img src={warning} alt="Aviso importante" />
            Importante!
            <br />
            Preencha dos dados
          </p>

          <button type="submit">Salvar cadastro</button>
        </Footer>
      </Form>
    </Container>
  );
};

export default TeacherForm;
