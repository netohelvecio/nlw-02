import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${props => props.theme.colors.textPrimary};
  background: ${props => props.theme.colors.primaryColor};

  .hero-image {
    width: 100%;
  }

  span {
    font-size: 1.4rem;

    display: flex;
    justify-content: center;
    align-items: center;

    img {
      margin-left: 1rem;
    }
  }

  @media (min-width: 1100px) {
    .hero-image {
      grid-area: hero;
      justify-self: end;
    }

    span {
      grid-area: total;
      justify-self: end;
    }
  }
`;

export const Content = styled.div`
  width: 90vw;
  max-width: 700px;

  @media (min-width: 1100px) {
    max-width: 1100px;

    display: grid;
    grid-template-rows: 350px 1fr;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-areas:
      'logo hero hero'
      'buttons buttons total';
  }
`;

export const LogoContainer = styled.div`
  text-align: center;
  margin-bottom: 3.2rem;

  img {
    height: 7rem;
  }

  h2 {
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 4.6rem;
    margin-top: 0.6rem;
  }

  @media (min-width: 1100px) {
    grid-area: logo;
    align-self: center;
    text-align: left;
    margin: 0;

    h2 {
      text-align: initial;
      font-size: 3.6rem;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 3.2rem 0;

  a {
    width: 28rem;
    height: 10.4rem;
    border-radius: 0.8rem;
    font: 700 2rem ${props => props.theme.font.archivo};

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${props => props.theme.colors.white};

    transition: all 0.2s;

    &:first-child {
      margin-right: 1.6rem;
    }

    img {
      width: 4rem;
      margin-right: 1.8rem;
    }
  }

  a.study {
    background: ${props => props.theme.colors.primaryLighterColor};

    &:hover {
      background: ${props => props.theme.colors.primaryLightColor};
    }
  }

  a.give-classes {
    background: ${props => props.theme.colors.secondaryColor};

    &:hover {
      background: ${props => props.theme.colors.secondaryDarkColor};
    }
  }

  @media (min-width: 1100px) {
    grid-area: buttons;
    justify-content: flex-start;

    a {
      font-size: 2.4rem;

      img {
        margin-right: 2.4rem;
      }
    }
  }
`;
