import styled from 'styled-components';

import { FieldContainerProps } from '../../utils/types';

export const FieldContainer = styled.div<FieldContainerProps>`
  position: relative;

  padding-top: 1.4rem;

  &:focus-within::after {
    width: calc(100% - 3.2rem);
    height: 2px;
    content: '';
    background: ${props => props.theme.colors.primaryLightColor};
    position: absolute;
    left: 1.6rem;
    right: 1.6rem;
    bottom: 5px;
  }

  label {
    color: ${props => props.theme.colors.textPrimary};
    font-size: 1.4rem;
  }

  textarea {
    width: 100%;
    height: 16rem;
    max-height: 20rem;
    margin-top: 0.8rem;
    border-radius: 0.8rem;
    background: ${props => props.theme.colors.inputBackgroundColor};
    border: 1px solid
      ${props =>
        props.error ? props.theme.colors.error : props.theme.colors.lineWhite};
    padding: 0 1.6rem;
    padding: 1.2rem 1.6rem;
    font: 1.6rem ${props => props.theme.font.archivo};
    resize: vertical;
  }

  @media (min-width: 700px) {
    & + & {
      margin-top: 0;
    }
  }
`;
