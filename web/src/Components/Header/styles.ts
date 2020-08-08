import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.colors.primaryColor};

  > div {
    width: 90%;
    margin: 0 auto;
    padding: 1.6rem 0;

    display: flex;
    justify-content: space-between;
    align-items: center;

    color: ${props => props.theme.colors.textPrimary};

    a {
      height: 3.2rem;
      transition: all 0.2s;

      &:hover {
        opacity: 0.6;
      }
    }

    > img {
      height: 1.6rem;
    }
  }

  @media (min-width: 700px) {
    height: 350px;

    > div {
      max-width: 800px;
    }
  }
`;

export const HeaderContent = styled.div`
  width: 90%;
  margin: 0 auto;
  position: relative;
  margin: 3.2rem auto;

  display: flex;
  flex-direction: column;

  strong {
    font: 700 3.6rem ${props => props.theme.font.archivo};
    line-height: 4.2rem;
    color: ${props => props.theme.colors.white};
  }

  p {
    max-width: 30rem;
    font-size: 1.8rem;
    line-height: 2.8rem;
    align-self: flex-start;
    margin-top: 1.6rem;
  }

  @media (min-width: 700px) {
    max-width: 740px;
    margin: 0 auto;
    padding-bottom: 48px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    strong {
      max-width: 350px;
      align-self: flex-start;
    }
  }
`;
