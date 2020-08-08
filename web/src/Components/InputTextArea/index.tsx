import React, { TextareaHTMLAttributes } from 'react';

import { FieldContainer } from './styles';

interface IProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  id: string;
  register?: any;
  error?: boolean;
}

const InputTextArea: React.FC<IProps> = ({
  label,
  id,
  register,
  error,
  ...props
}) => {
  return (
    <FieldContainer error={error}>
      <label htmlFor={id}>{label}</label>
      <textarea id={id} ref={register} {...props} />
    </FieldContainer>
  );
};

export default InputTextArea;
