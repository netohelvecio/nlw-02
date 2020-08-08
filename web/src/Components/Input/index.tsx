import React, { InputHTMLAttributes } from 'react';
import { MaskedInputProps } from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

import { defaultMaskOptions } from '../../utils/helpers';

import { FieldContainer, InputMaskStyled } from './styles';

type IInputMask = InputHTMLAttributes<HTMLInputElement> & MaskedInputProps;

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  error?: boolean;
  register?: any;
}

interface IInputMaskProps extends IInputMask {
  label: string;
  id: string;
  error?: boolean;
  register?: any;
}

export const Input: React.FC<IInputProps> = ({
  label,
  id,
  register,
  error,
  ...props
}) => {
  return (
    <FieldContainer error={error}>
      <label htmlFor={id}>{label}</label>
      <input id={id} ref={register} {...props} />
    </FieldContainer>
  );
};

export const InputMask: React.FC<IInputMaskProps> = ({
  label,
  id,
  register,
  error,
  ...props
}) => {
  return (
    <FieldContainer error={error}>
      <label htmlFor={id}>{label}</label>
      <InputMaskStyled id={id} ref={register} error={error} {...props} />
    </FieldContainer>
  );
};

export const CurrencyInput: React.FC<IInputMaskProps> = ({
  label,
  id,
  register,
  error,
  ...props
}) => {
  const currencyMask = createNumberMask({
    ...defaultMaskOptions,
  });

  return (
    <FieldContainer error={error}>
      <label htmlFor={id}>{label}</label>
      <InputMaskStyled
        id={id}
        ref={register}
        mask={currencyMask}
        error={error}
        {...props}
      />
    </FieldContainer>
  );
};
