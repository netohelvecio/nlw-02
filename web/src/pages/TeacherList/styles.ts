import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 700px;
  height: 100vh;

  @media (min-width: 700px) {
    max-width: 100%;
  }
`;

export const Form = styled.form`
  margin-top: 3.2rem;
  width: 100%;

  button {
    width: 100%;
    height: 5.6rem;
    margin-top: 3.8rem;
    background: ${props => props.theme.colors.secondaryColor};
    color: ${props => props.theme.colors.white};
    border-radius: 0.8rem;
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
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 16px;
    position: relative;
    bottom: -88px;
  }
`;

export const Main = styled.main`
  margin: 3.2rem auto;
  width: 90%;

  h2 {
    text-align: center;
    margin-top: 4rem;
  }

  @media (min-width: 700px) {
    max-width: 800px;
    margin: 0 auto;
    padding: 3.2rem 0;
  }
`;
