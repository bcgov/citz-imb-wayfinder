/**
 * @summary - This page will dictate styling for our map and relevant components
 * @author  Tyler Maloney
 */

import styled from '@emotion/styled';
import typography from 'typography';
import {
  MapContainer,
  Popup,
} from 'react-leaflet';

export const MapWrapperDiv = styled.div`
    ${typography.toString()}
    width: 100%;
    height: 100%;
`;

export const StyledMapContainer = styled(MapContainer)`
    ${typography.toString()}
    height: 39.5svh;
    width: 95svw;
    overflow: hidden;
    @media (min-width: 768px) {
        height: 65vh;
        width: 40vw;
      }
`;

export const StyledPopup = styled(Popup)`
    ${typography.toString()}
`;

export const StyledPopupDiv = styled.div`
    ${typography.toString()}
    max-height: 10em;
    overflow-y: auto;
`;
