import React, { InputHTMLAttributes } from 'react';

import { FieldContainer } from './styles';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

const Input: React.FC<IProps> = ({ label, id, ...props }) => {
  return (
    <FieldContainer>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} />
    </FieldContainer>
  );
};

export default Input;
