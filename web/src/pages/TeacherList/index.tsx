import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { ITeacherList, ISearchClassForm } from '../../utils/types';

import Header from '../../Components/Header';
import { Input } from '../../Components/Input';
import Select from '../../Components/Select';
import TeacherCard from '../../Components/TeacherCard';

import api from '../../services/api';
import { subjectOptions, weekDayOptions } from '../../utils/helpers';

import { Container, Form, Main } from './styles';

const TeacherList: React.FC = () => {
  const [teacherList, setTeacherList] = useState<ITeacherList[]>([]);
  const [loading, setLoading] = useState(false);
  const { handleSubmit, register, errors } = useForm<ISearchClassForm>();

  async function onSubmit(data: ISearchClassForm) {
    const { subject, time, week_day } = data;

    setLoading(true);

    api
      .get<ITeacherList[]>('classes', {
        params: {
          subject,
          time,
          week_day,
        },
      })
      .then(response => {
        setTeacherList(response.data);
      })
      .catch(err => {
        console.error(err.response.data);
        toast.error(err.response.data.message || 'Erro ao listar aulas.');
      })
      .finally(() => setLoading(false));
  }

  return (
    <Container>
      <Header title="Estes são os proffys disponíveis.">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Select
            label="Matéria"
            id="subject"
            name="subject"
            options={subjectOptions}
            register={register({ required: true })}
            error={Boolean(errors.subject)}
          />

          <Select
            label="Dia da semana"
            id="week-day"
            name="week_day"
            options={weekDayOptions}
            register={register({ required: true })}
            error={Boolean(errors.week_day)}
          />

          <Input
            label="Hora"
            id="time"
            name="time"
            type="time"
            register={register({ required: true })}
            error={Boolean(errors.time)}
          />

          <button type="submit">Buscar</button>
        </Form>
      </Header>

      <Main>
        {loading ? (
          <h2>Carregando...</h2>
        ) : (
          teacherList.map(item => (
            <TeacherCard key={item.id} teacherData={item} />
          ))
        )}
      </Main>
    </Container>
  );
};

export default TeacherList;
