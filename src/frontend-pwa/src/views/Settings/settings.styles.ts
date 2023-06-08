/**
 * @summary Styling for the Settings view
 * @author Dallas Richmond
 */
import styled from '@emotion/styled';
import typography from '../../typography';

export const SettingsContainer = styled.div`
  width: 100vw;
  padding: 100px;
  border-radius: 4px;
  position: fixed;
  top: 10%;
  left: 0%;
  @media (max-width: 768px) {
    padding: 20px;
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
