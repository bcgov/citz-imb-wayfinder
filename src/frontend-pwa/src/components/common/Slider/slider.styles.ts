/**
 * @summary Styles for Slider component
 * @author Dallas Richmond
 */
import styled from '@emotion/styled';
import mq from '../../../constants/mq';

export const StyledSlider = styled.input`
  margin-top: 1rem;
  width: 28vw;
  @media (max-width: ${mq.tablet}) {
    width: 80vw;
  }
`;

export const StyledP = styled.p`
  font-size: 1.5rem;
  margin: 0;
`;
