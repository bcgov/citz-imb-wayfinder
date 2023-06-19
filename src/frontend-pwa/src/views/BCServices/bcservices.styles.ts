/**
 * @summary Styling for BCServices view
 * @author LocalNewsTV
 */
import styled from '@emotion/styled';
import mq from '../../constants/mq';

// import typography from '../../typography';
export const ViewContainer = styled.div`
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

export const ContentContainer = styled.div`
  display: flex;
  padding: 50pt 0pt;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
  max-width: 1250px;
  overflow: hidden;
  @media (min-width: ${mq.tablet}) {
    flex-direction: row-reverse;
    padding: inherit 10pt;
  }
`;

export const ServiceListContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 40vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  @media (min-width: ${mq.tablet}) {
    height: 100%;
    max-height: 100%;
    width: 425pt;
    margin: 0 1em;
  }
`;

export const MapContainer = styled.div`
  display: flex;
  height: 40svh;
  min-height: 40svh;
  width: 100%;
  align-items: center;
  justify-content: center;
  @media (min-width: ${mq.tablet}) {
    height: 100%;
    border-radius: 4pt;
  }
`;

export const StyledP = styled.p`
  width: 100%;
  text-align: center;
`;
