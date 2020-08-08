import { IOptions } from './types';

export const subjectOptions: IOptions[] = [
  { value: 'Artes', label: 'Artes' },
  { value: 'Biologia', label: 'Biologia' },
  { value: 'Matemática', label: 'Matemática' },
  { value: 'História', label: 'História' },
  { value: 'Física', label: 'Física' },
  { value: 'Geografia', label: 'Geografia' },
  { value: 'Português', label: 'Português' },
  { value: 'Química', label: 'Química' },
];

export const weekDayOptions: IOptions[] = [
  { value: '0', label: 'Domingo' },
  { value: '1', label: 'Segunda-Feira' },
  { value: '2', label: 'Terça-Feira' },
  { value: '3', label: 'Quarta-Feira' },
  { value: '4', label: 'Quinta-Feira' },
  { value: '5', label: 'Sexta-Feira' },
  { value: '6', label: 'Sábado-Feira' },
];

export const numberMask = [
  '(',
  /[1-9]/,
  /\d/,
  ')',
  ' ',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];

export const defaultMaskOptions = {
  prefix: 'R$ ',
  suffix: '',
  includeThousandsSeparator: true,
  thousandsSeparatorSymbol: '.',
  allowDecimal: true,
  decimalSymbol: ',',
  decimalLimit: 2,
  integerLimit: 7,
  allowNegative: false,
  allowLeadingZeroes: false,
};
