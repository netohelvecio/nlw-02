import React, { SelectHTMLAttributes } from 'react';

import { IOptions } from '../../utils/types';

import { FieldContainer } from './styles';

interface IProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  id: string;
  options: IOptions[];
}

const Select: React.FC<IProps> = ({ label, id, options, ...props }) => {
  return (
    <FieldContainer>
      <label htmlFor={id}>{label}</label>
      <select defaultValue="" id={id} {...props}>
        <option value="" disabled hidden>
          Selecione uma opção
        </option>

        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </FieldContainer>
  );
};

export default Select;
