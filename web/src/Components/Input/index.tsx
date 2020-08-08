import React, { InputHTMLAttributes } from 'react';
import { MaskedInputProps } from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

import { defaultMaskOptions } from '../../utils/helpers';

import { FieldContainer, InputMaskStyled } from './styles';

type IInputMask = InputHTMLAttributes<HTMLInputElement> & MaskedInputProps;

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

interface IInputMaskProps extends IInputMask {
  label: string;
  id: string;
}

export const Input: React.FC<IInputProps> = ({ label, id, ...props }) => {
  return (
    <FieldContainer>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} />
    </FieldContainer>
  );
};

export const InputMask: React.FC<IInputMaskProps> = ({
  label,
  id,
  ...props
}) => {
  return (
    <FieldContainer>
      <label htmlFor={id}>{label}</label>
      <InputMaskStyled id={id} {...props} />
    </FieldContainer>
  );
};

export const CurrencyInput: React.FC<IInputMaskProps> = ({
  label,
  id,
  ...props
}) => {
  const currencyMask = createNumberMask({
    ...defaultMaskOptions,
  });

  return (
    <FieldContainer>
      <label htmlFor={id}>{label}</label>
      <InputMaskStyled id={id} mask={currencyMask} {...props} />
    </FieldContainer>
  );
};
