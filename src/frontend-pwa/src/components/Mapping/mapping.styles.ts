// import styled from '@emotion/styled';

// // import typography from '../../typography';

// export const StyledMap = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: 100%;
//   width: 100%;
//   overflow: hidden;

// `;
// export const StyledImg = styled.img`

// `;
import styled from '@emotion/styled';
import typography from 'typography'
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup
} from 'react-leaflet';

export const MapWrapperDiv = styled.div`
    ${typography.toString()}
    width: 100%;
    height: 100%;
    
`;

export const StyledMapContainer = styled(MapContainer)`
    ${typography.toString()}
`;

export const StyledPopup = styled(Popup)`
    ${typography.toString()}
`;

export const StyledPopupDiv = styled.div`
    ${typography.toString()}
    max-height: 10em;
    overflow-y: auto;
`;

// export default MapWrapperDiv;
