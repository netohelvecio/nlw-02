import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { toast } from 'react-toastify';

import Header from '../../Components/Header';
import { Input, InputMask, CurrencyInput } from '../../Components/Input';
import InputTextArea from '../../Components/InputTextArea';
import Select from '../../Components/Select';
import Dropzone from '../../Components/Dropzone';

import api from '../../services/api';
import {
  subjectOptions,
  weekDayOptions,
  numberMask,
} from '../../utils/helpers';
import {
  ISchedulesItems,
  IClassForm,
  IUser,
  IClass,
  IClassSchedule,
} from '../../utils/types';

import warning from '../../assets/images/icons/warning.svg';

import { Container, Form, ScheduleItem, Footer } from './styles';

const TeacherForm: React.FC = () => {
  const [scheduleItem, setScheduleItem] = useState<ISchedulesItems[]>([
    { week_day: null, from: '', to: '' },
  ]);
  const [loading, setLoading] = useState(false);
  const [avatarFile, setAvatarFile] = useState<File>();
  const { register, handleSubmit, errors, control, reset } = useForm<
    IClassForm
  >();

  async function onSubmit(data: IClassForm) {
    try {
      const { name, whatsapp, bio, subject, cost, schedule } = data;

      const costFormatted = cost.replace('R$', '').replace(',', '.');

      setLoading(true);

      const userResponse = await api.post<IUser>('users', {
        name,
        whatsapp,
        bio,
      });

      const classResponse = await api.post<IClass>('classes', {
        subject,
        user_id: userResponse.data.id,
        cost: costFormatted,
      });

      await api.post<IClassSchedule>('class-schedules', {
        class_id: classResponse.data.id,
        schedule,
      });

      if (avatarFile) {
        const avatarData = new FormData();

        avatarData.append('avatar', avatarFile);
        avatarData.append('user_id', userResponse.data.id);

        await api.patch('users', avatarData);
      }

      reset();
      toast.success('Professor cadastrado com sucesso!');
      setScheduleItem([{ week_day: null, from: '', to: '' }]);
      setLoading(false);
    } catch (err) {
      console.log(err.response.data);
      toast.error(err.response.data.message || 'Erro ao cadastrar professor.');
      setLoading(false);
    }
  }

  return (
    <Container>
      <Header
        title="Que incrível que você
  quer dar aulas."
        description="O primeiro passo, é preencher esse
  formulário de inscrição."
      />

      <Form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <legend>Seus dados</legend>
          <Dropzone onFileUploaded={setAvatarFile} />

          <Input
            label="Nome completo"
            id="name"
            name="name"
            type="text"
            error={Boolean(errors.name)}
            register={register({
              required: true,
            })}
          />

          <Controller
            control={control}
            name="whatsapp"
            rules={{
              required: true,
            }}
            as={
              <InputMask
                mask={numberMask}
                label="Whatsapp"
                id="whatsapp"
                type="text"
                error={Boolean(errors.whatsapp)}
              />
            }
          />

          <InputTextArea
            label="Biografia"
            id="bio"
            name="bio"
            error={Boolean(errors.bio)}
            register={register({
              required: true,
            })}
          />
        </fieldset>

        <fieldset>
          <legend>Sobre sua aula</legend>

          <Select
            label="Matéria"
            id="subject"
            name="subject"
            options={subjectOptions}
            error={Boolean(errors.subject)}
            register={register({
              required: true,
            })}
          />

          <Controller
            control={control}
            name="cost"
            rules={{
              required: true,
            }}
            as={
              <CurrencyInput
                label="Custo da sua hora por aula"
                id="cost"
                type="text"
                error={Boolean(errors.cost)}
                register={register({
                  required: true,
                })}
              />
            }
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
                name={`schedule[${index}].week_day`}
                options={weekDayOptions}
                error={Boolean(errors.schedule?.[index]?.week_day)}
                register={register({
                  required: true,
                })}
              />

              <Input
                label="Das"
                id="from"
                name={`schedule[${index}].from`}
                type="time"
                error={Boolean(errors.schedule?.[index]?.from)}
                register={register({
                  required: true,
                })}
              />

              <Input
                label="Até"
                id="to"
                name={`schedule[${index}].to`}
                type="time"
                error={Boolean(errors.schedule?.[index]?.to)}
                register={register({
                  required: true,
                })}
              />
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

          <button type="submit">
            {loading ? 'Carregando...' : 'Salvar cadastro'}
          </button>
        </Footer>
      </Form>
    </Container>
  );
};

export default TeacherForm;
