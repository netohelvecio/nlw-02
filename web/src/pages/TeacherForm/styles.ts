import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 700px;
  height: 100vh;

  @media (min-width: 700px) {
    max-width: 100%;
  }

  .header-content {
    margin-bottom: 6.4rem;
  }
`;

export const Form = styled.div`
  background: ${props => props.theme.colors.white};
  width: 100%;
  max-width: 800px;
  border-radius: 0.8rem;
  margin: -3.2rem auto 3.2rem;
  padding-top: 4.4rem;
  overflow: hidden;

  fieldset {
    border: 0;
    padding: 2.4rem;

    & + & {
      margin-top: 4.4rem;
    }

    legend {
      font: 700 2.4rem ${props => props.theme.font.archivo};
      color: ${props => props.theme.colors.textTitle};

      display: flex;
      align-items: center;
      justify-content: space-between;

      width: 100%;
      padding-bottom: 1.6rem;
      border-bottom: 1px solid ${props => props.theme.colors.lineWhite};

      button {
        background: none;
        color: ${props => props.theme.colors.primaryColor};
        transition: all 0.2;
        border: 0;
        font: 700 1.6rem ${props => props.theme.font.archivo};

        &:hover {
          color: ${props => props.theme.colors.primaryDarkColor};
        }
      }
    }

    label {
      color: ${props => props.theme.colors.textComplement};
    }
  }

  @media (min-width: 700px) {
    fieldset {
      padding: 2.4rem 6.4rem;
    }
  }
`;

export const Footer = styled.footer`
  padding: 4rem 2.4rem;
  background: ${props => props.theme.colors.boxFooter};
  border-top: 1px solid ${props => props.theme.colors.lineWhite};
  margin-top: 4.4rem;

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    line-height: 2.4rem;
    color: ${props => props.theme.colors.textComplement};

    img {
      margin-right: 2rem;
    }
  }

  button {
    width: 100%;
    height: 5.6rem;
    background: ${props => props.theme.colors.secondaryColor};
    color: ${props => props.theme.colors.white};
    border-radius: 0.8rem;
    margin-top: 3.2rem;
    transition: all 0.2;
    border: 0;
    font: 700 1.6rem ${props => props.theme.font.archivo};

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background: ${props => props.theme.colors.secondaryDarkColor};
    }
  }

  @media (min-width: 700px) {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 4rem 6.4rem;

    button {
      margin-top: 0;
      width: 24rem;
    }
  }
`;

export const ScheduleItem = styled.div`
  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    grid-gap: 1.6rem;
  }
`;
