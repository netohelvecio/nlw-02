import React from 'react';

import api from '../../services/api';
import { ITeacherList } from '../../utils/types';
import { formatPrice } from '../../utils/helpers';

import whatsapp from '../../assets/images/icons/whatsapp.svg';

import { Container, HeaderCard } from './styles';

interface IProps {
  teacherData: ITeacherList;
}

const TeacherCard: React.FC<IProps> = ({ teacherData }) => {
  function createNewConnection(user_id: string) {
    api.post('connections', { user_id });
  }

  return (
    <Container>
      <HeaderCard>
        <img
          src={`http://localhost:3333/files/${teacherData.class.user.avatar}`}
          alt={teacherData.class.user.name}
        />

        <div>
          <strong>{teacherData.class.user.name}</strong>
          <span>{teacherData.class.subject}</span>
        </div>
      </HeaderCard>

      <p>{teacherData.class.user.bio}.</p>

      <footer>
        <p>
          Preço/hora
          <strong>{formatPrice(teacherData.class.cost)}</strong>
        </p>

        <a
          onClick={() => createNewConnection(teacherData.class.user.id)}
          href={`https://wa.me/${teacherData.class.user.whatsapp.replace(
            /\D+/g,
            '',
          )}`}
          target="_blank"
        >
          <img src={whatsapp} alt="Entrar em contato" />
          Entrar em contato
        </a>
      </footer>
    </Container>
  );
};

export default TeacherCard;
