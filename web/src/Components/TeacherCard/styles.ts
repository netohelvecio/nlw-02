import styled from 'styled-components';

export const Container = styled.article`
  background: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.lineWhite};
  border-radius: 0.8rem;
  margin-top: 2.4rem;
  overflow: hidden;

  > p {
    padding: 1.2rem 2rem;
    font-size: 1.6rem;
    line-height: 2.8rem;
  }

  footer {
    padding: 3.2rem 2rem;
    background: ${props => props.theme.colors.boxFooter};
    border-top: 1px solid ${props => props.theme.colors.lineWhite};
    margin-top: 3.2rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      color: ${props => props.theme.colors.textComplement};

      strong {
        color: ${props => props.theme.colors.primaryColor};
        font-size: 1.6rem;
        display: block;
        margin-top: 0.5rem;
      }
    }

    button {
      width: 20rem;
      height: 5.6rem;
      background: ${props => props.theme.colors.secondaryColor};
      color: ${props => props.theme.colors.white};
      border: 0;
      border-radius: 0.8rem;
      cursor: pointer;
      font: 700 1.4rem ${props => props.theme.font.archivo};

      display: flex;
      align-items: center;
      justify-content: space-evenly;

      transition: all 0.2s;

      &:hover {
        background: ${props => props.theme.colors.secondaryDarkColor};
      }
    }
  }

  @media (min-width: 700px) {
    > p {
      padding: 0 3.2rem;
    }

    footer {
      padding: 3.2rem;

      p {
        strong {
          display: initial;
          margin-left: 1.6rem;
        }
      }

      button {
        width: 24.5rem;
        font-size: 1.6rem;
      }
    }
  }
`;

export const HeaderCard = styled.header`
  padding: 3.2rem 2rem;
  display: flex;
  align-items: center;

  img {
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
  }

  div {
    margin-left: 2.4rem;

    strong {
      font: 700 2.4rem ${props => props.theme.font.archivo};
      display: block;
      color: ${props => props.theme.colors.textTitle};
    }

    span {
      font-size: 1.6rem;
      margin-top: 0.4rem;
      display: block;
    }
  }

  @media (min-width: 700px) {
    padding: 3.2rem;
  }
`;
