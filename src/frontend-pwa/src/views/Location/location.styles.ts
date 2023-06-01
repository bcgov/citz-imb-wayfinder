import styled from '@emotion/styled';
import typography from '../../typography';

export const LocationViewWrapper = styled.div`
  width: 100vw;
  padding: 100px;
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const TextHeader = styled.h2`
  ${typography.toString()}
  font-weight: 500;
`;
