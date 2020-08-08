import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';

export const Toast = styled(ToastContainer)`
  .Toastify__toast--success {
    background: ${props => props.theme.colors.secondaryColor};
    font: 600 1.6rem ${props => props.theme.font.poppins};
    border-radius: 0.8rem;
  }
  .Toastify__toast--error {
    background: ${props => props.theme.colors.error};
    font: 600 1.6rem ${props => props.theme.font.poppins};
    border-radius: 0.8rem;
  }
`;
