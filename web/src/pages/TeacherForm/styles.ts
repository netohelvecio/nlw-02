import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  max-width: 700px;
  height: 100vh;

  @media (min-width: 700px) {
    max-width: 100%;
  }

  .header-content {
    margin-bottom: 6.4rem;
  }

  fieldset {
    border: 0;
    padding: 0 2.4rem;

    & + & {
      margin-top: 6.4rem;
    }
  }

  legend {
    font: 700 2.4rem ${props => props.theme.font.archivo};
    color: ${props => props.theme.colors.textTitle};
    margin-bottom: 2.4rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    padding-bottom: 1.6rem;
    border-bottom: 1px solid ${props => props.theme.colors.lineWhite};
  }
`;

export const Form = styled.div`
  background: ${props => props.theme.colors.white};
  width: 100%;
  max-width: 800px;
  border-radius: 0.8rem;
  margin: -3.2rem auto 3.2rem;
  padding-top: 6.4rem;
  overflow: hidden;
`;
