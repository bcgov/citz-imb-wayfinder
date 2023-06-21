/**
 * @summary Styles for SplashScreen component
 * @author Dallas Richmond
 */
import styled from '@emotion/styled';
import typography from '../../../typography';

export const SplashScreenWrapper = styled.div`
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #036;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const Image = styled.img`
  height: 200px;
`;

export const Text = styled.p`
  ${typography.toString()}
  font-size: 24px;
  color: #FFFFFF; 
`;
