import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

export const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  
  100% {
    transform: rotate(360deg);
  }
`;

export const SpinnerWrapper = styled.div`
  width: 40px;
  height: 40px;
  margin: 100px auto;
  background-color: #333;
  border-radius: 100%;
  animation: ${spin} 1s infinite linear;
`;
