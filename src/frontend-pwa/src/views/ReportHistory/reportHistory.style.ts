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

export const StyledHeaderTwo = styled.h2`
  width: 100%;
  text-align: left;
  padding-left: 0.75rem;
`;

export const ContentContainer = styled.div`
  display: flex;
  padding: 55pt 0;
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
  padding: 0 0.75em;
  justify-content: space-between;
  margin-bottom: 2em;
`;

export const StyledP = styled.p`
  margin: 0;
  padding: 0;
`;

export const InfoDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
`;

export const DetailSection = styled.div`
  display: flex;
  padding: 0 0.75em;
  flex-direction: row;
  width: 100%;
  margin-bottom: 2em;
  justify-content: space-between;
  align-items: flex-start;
`;

export const DetailsTA = styled.textarea`
  width: 100%;
  border-radius: 0.4em;
  resize: none;
  margin-left: 2em;
  padding: 5pt 1em;
  background-color: #FFF;
  border: 1px solid #DCDCDC;
  &:focus {
    outline: none;
  }
  &:disabled {
    color: black;
  }
`;
