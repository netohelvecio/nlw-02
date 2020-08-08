import React, { TextareaHTMLAttributes } from 'react';

import { FieldContainer } from './styles';

interface IProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  id: string;
}

const InputTextArea: React.FC<IProps> = ({ label, id, ...props }) => {
  return (
    <FieldContainer>
      <label htmlFor={id}>{label}</label>
      <textarea id={id} {...props} />
    </FieldContainer>
  );
};

export default InputTextArea;
