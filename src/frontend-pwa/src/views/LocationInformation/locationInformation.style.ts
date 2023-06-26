import styled from '@emotion/styled';
import mq from '../../constants/mq';

export const ViewContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  min-height: 100svh;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export const LocaleHeader = styled.h2`
  width: 100%;
  padding: 0 10pt;
  margin: 0;
  text-align: left;
`;
export const SubHeader = styled.p`
  width: 100%;
  text-align: left;
  padding: 0 10pt;
  margin: 0.25em 0 0.75em 0;
  font-size: 14pt;
`;
export const ContentContainer = styled.div`
  display: flex;
  padding: 55pt 0pt;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
  max-width: 1250px;
  overflow: hidden;
  @media (min-width: ${mq.tablet}) {
    padding: inherit 10pt;
  }
`;
export const Text = styled.p`
  margin: 0;
  padding: 0 10pt;
  text-break: normal;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 450pt;
  padding: 4pt 0;
`;
