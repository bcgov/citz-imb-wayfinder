import styled from '@emotion/styled';
import typography from 'typography';
import {
  MapContainer,
  // TileLayer,
  Marker,
  Popup,
} from 'react-leaflet';

export const MapWrapperDiv = styled.div`
    ${typography.toString()}
    // display: flex;
    width: 100%;
    height: 100%;
`;

export const StyledMapContainer = styled(MapContainer)`
    ${typography.toString()}
    // display: flex;
    // align-items: center;
    // justify-content: center;
    // height: 30vh;
    width: 65vw;
    overflow: hidden;
`;

export const StyledMarker = styled(Marker)`
    background-color: red;
    filter: saturate(500%) contrast(800%) brightness(500%) invert(80%) sepia(50%) hue-rotate(120deg);
`;

export const StyledPopup = styled(Popup)`
    ${typography.toString()}
`;

export const StyledPopupDiv = styled.div`
    ${typography.toString()}
    max-height: 10em;
    overflow-y: auto;
`;
