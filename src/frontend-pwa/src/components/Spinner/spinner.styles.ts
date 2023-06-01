import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

export const spin = keyframes`
  0% {
    transform: translate3d(-50%, -50%, 0) rotate(0deg);
  }
  100% {
    transform: translate3d(-50%, -50%, 0) rotate(360deg);
`;

export const SpinnerWrapper = styled.div`
  position: fixed;
  top: 80%;
  left: 50%;
  animation: 1.5s linear infinite ${spin};
  animation-play-state: inherit;
  border: solid 5px #cfd0d1;
  border-bottom-color: #1c87c9;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  transform: translate3d(-50%, -50%, 0);
  will-change: transform;
  &::before
`;
