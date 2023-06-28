/**
 * @summary Styling for NotFound component
 * @author LocalNewsTV
 */
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
  padding: 55pt 10pt;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: left;
  max-width: 300pt;
  overflow: hidden;
  @media (min-width: ${mq.tablet}) {
    padding: inherit 10pt;
  }
`;
export const Bold = styled.span`
  font-weight: 700;
`;
export const Soft = styled.span`
  color: #777;
`;
export const Text = styled.p`
  
`;
export const HeaderTwo = styled.h2`

`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  width: 100%;
  align-items: center;
  justify-content: left;
`;
