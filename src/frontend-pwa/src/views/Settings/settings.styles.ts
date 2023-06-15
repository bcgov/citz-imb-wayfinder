/**
 * @summary Styling for the Settings view
 * @author Dallas Richmond
 */
import styled from '@emotion/styled';
import typography from '../../typography';

export const SettingsContainer = styled.div`
  max-width: 80vw;
  padding: 4rem;
  border-radius: 4px;
  top: 10%;
  left: 0%;
  @media (max-width: 768px) {
    max-width: 100vw;
    padding: 1rem;
    border-radius: 4px;
  }
`;

export const Section = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h2`
  ${typography.toString()}
  font-size: 18px;
  margin: 0;
`;

export const SliderWrapper = styled.div`
  padding-top: 1rem;
`;
