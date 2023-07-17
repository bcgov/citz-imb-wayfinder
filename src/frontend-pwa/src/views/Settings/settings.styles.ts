/**
 * @summary Styling for the Settings view
 * @author Dallas Richmond
 */
import styled from '@emotion/styled';
import typography from '../../typography';
import mq from '../../constants/mq';

export const SettingsWrapper = styled.div`
  background-color: white;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  min-height: 100svh;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 80vw;
  height: 100%;
  justify-content: center;
  padding: 4rem;
  top: 10%;
  left: 0%;
  @media (max-width: ${mq.tablet}) {
    max-width: 100vw;
    padding: 2em;
  }
  @media (max-width: 375px) {
    max-width: 100vw;
    padding: 2em;
    padding-top: 100px;
    padding-bottom: 100px;
  }
  @media (max-width: 360px) {
    max-width: 100vw;
    padding: 1.5em;
    padding-top: 100px;
    padding-bottom: 100px;
  }
`;

export const Section = styled.div`
  border-bottom: 1px solid #88888847;
  height: 50px;
  width: 240pt;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Title = styled.h2`
  ${typography.toString()}
  font-size: 18px;
  margin: 0;
`;
export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const SliderWrapper = styled.div`
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const StyledSelect = styled.select`
    width: auto;
    border-radius: 0.4em;
    padding: 5pt 10pt;
    background-color: #F5F5F5;
    border: 1px solid #DCDCDC;
`;
