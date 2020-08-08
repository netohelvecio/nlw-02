import styled from 'styled-components';

export const Container = styled.div`
  height: 24rem;
  width: 24rem;
  border-radius: 50%;
  background: ${props => props.theme.colors.secondaryColor};

  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1.4rem auto;
  outline: 0;
  cursor: pointer;

  img {
    height: 24rem;
    width: 24rem;
    border-radius: 50%;
    object-fit: cover;
  }

  p {
    width: calc(100% - 60px);
    height: calc(100% - 60px);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    font: 600 1.4rem ${props => props.theme.font.archivo};
    text-align: justify;
    color: ${props => props.theme.colors.white};
  }

  p svg {
    color: ${props => props.theme.colors.primaryDarkerColor};
    width: 3.2rem;
    height: 3.2rem;
    margin-bottom: 1.8rem;
  }
`;
