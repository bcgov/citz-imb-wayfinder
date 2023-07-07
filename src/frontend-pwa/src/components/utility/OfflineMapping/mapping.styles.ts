/**
 * @summary - This page will dictate styling for our map and relevant components
 * @author  Tyler Maloney, LocalNewsTV
 */

import styled from '@emotion/styled';
import typography from 'typography';
import {
  MapContainer,
  Popup,
} from 'react-leaflet';
import mq from '../../../constants/mq';

export const MapWrapperDiv = styled.div`
    ${typography.toString()}
`;

export const StyledMapContainer = styled(MapContainer)`
    ${typography.toString()}
    height: 39.5svh;
    max-height: 70svh;
    width: 100svw;
    overflow: hidden;
    @media (min-width: ${mq.tablet}) {
        height: 500pt;
        width: 350pt;
    }
    @media (min-width: 1000px) {
        height: 500pt;
        width: 500pt;
    }
`;

export const StyledPopup = styled(Popup)`
    ${typography.toString()}
`;

export const PopupInfo = styled.p`
    margin: 0;
    padding: 0;
`;
export const StyledPopupDiv = styled.div`
    ${typography.toString()}
    max-height: 10em;
    overflow-y: auto;
`;
