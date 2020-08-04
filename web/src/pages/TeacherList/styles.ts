import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  max-width: 700px;
  height: 100vh;

  @media (min-width: 700px) {
    max-width: 100%;
  }
`;

export const Form = styled.form`
  margin-top: 3.2rem;
  width: 100%;

  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 16px;
    position: absolute;
    bottom: -28px;
  }
`;

export const FieldContainer = styled.div`
  position: relative;

  & + & {
    margin-top: 1.4rem;
  }

  &:focus-within::after {
    width: calc(100% - 3.2rem);
    height: 2px;
    content: '';
    background: ${props => props.theme.colors.primaryLightColor};
    position: absolute;
    left: 1.6rem;
    right: 1.6rem;
    bottom: 0;
  }

  label {
    color: ${props => props.theme.colors.textPrimary};
    font-size: 1.4rem;
  }

  input {
    width: 100%;
    height: 5.6rem;
    margin-top: 0.8rem;
    border-radius: 0.8rem;
    background: ${props => props.theme.colors.inputBackgroundColor};
    border: 1px solid ${props => props.theme.colors.lineWhite};
    padding: 0 1.6rem;
    font: 1.6rem ${props => props.theme.font.archivo};
  }

  @media (min-width: 700px) {
    & + & {
      margin-top: 0;
    }
  }
`;
