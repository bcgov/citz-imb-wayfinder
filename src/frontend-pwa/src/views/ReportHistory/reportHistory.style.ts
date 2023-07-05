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

export const ContentContainer = styled.div`
  display: flex;
  padding: 55pt 0pt;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  max-width: 1250px;
  overflow: hidden;
  @media (min-width: ${mq.tablet}) {
    max-width: 475pt;
    padding: inherit 10pt;
  }
`;

export const HistoryRow = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const StyledP = styled.p`
  margin: 0;
  padding: 0;
`;
