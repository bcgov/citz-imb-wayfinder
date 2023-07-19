/**
 * @summary Styling for the Settings view
 * @author Dallas Richmond
 */
import styled from '@emotion/styled';
import typography from '../../typography';
import mq from '../../constants/mq';

export const SettingsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 80%;
  padding: 50pt 0pt;
  flex-direction: column;
  max-height: 95%;
  @media (min-width: ${mq.tablet}) {
    width: 60%;
  }
  @media (min-width: ${mq.desktop}) {
    width: 40%;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 8px;
    background: none;
    border-radius: 3pt;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    background: none;
  }
`;

export const Header = styled.h1`
  padding-top: 5pt;
`;

export const Section = styled.div`
  border-bottom: 1px solid #88888847;
  border-top: 1px solid #88888847;
  min-height: 50px;
  width: 100%;
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

`;

export const StyledSelect = styled.select`
    width: auto;
    border-radius: 0.4em;
    padding: 5pt 10pt;
    background-color: #F5F5F5;
    border: 1px solid #DCDCDC;
`;
