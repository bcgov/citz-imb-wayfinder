/* eslint-disable global-require */
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/images/marker-shadow.png';
import * as Leaflet from 'leaflet';

import iconUrl from '/marker-icon.png';
import redIconUrl from '/marker-icon-2x-red.png';

import {
  // MapContainer,
  TileLayer,
  Marker,
  Popup,
} from 'react-leaflet';

import {
  MapWrapperDiv,
  StyledPopup,
  StyledMapContainer,
  StyledMarker,
} from './mapping.styles';
import SingleLocation from '../../Type/SingleLocation';
import LocationsArray from '../../Type/LocationsArray';

type MappingProps = {
  locations: LocationsArray;
}

export const newIcon = new Leaflet.Icon({
  iconUrl,
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [25, 55],
});

export const redIcon = new Leaflet.Icon({
  redIconUrl,
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [25, 55],
});

export default function Mapping({ locations }: MappingProps) {
  return (
    <div>
      <MapWrapperDiv>
        <StyledMapContainer
          center={[48.4284, -123.3656]}
          zoom={12}
          scrollWheelZoom
          style={{ height: '80vh', width: '80wh' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <StyledMarker icon={redIcon} position={[48.4284, -123.3656]}>
            <Popup>
              This is the lat/long center of Victoria, British Columbia!
              <br />
              <h1>oh buddy!</h1>
              <br />
              <br />
              <br />
              <br />
            </Popup>
          </StyledMarker>
          {locations.map((item: SingleLocation, index: number) => (
            // eslint-disable-next-line react/no-array-index-key
            <Marker icon={newIcon} key={index} position={[item.latitude, item.longitude]}>
              <StyledPopup>
                <h3>
                  Location:
                  {item.locale}
                </h3>
                <p>
                  Address:
                  {item.address.label}
                </p>
                <p>Contact Info:</p>
                <ul>
                  <li>
                    Phone Number:
                    {/* {item.contact.phone} */}
                  </li>
                  <li>
                    Fax Number:
                    {/* {item.contact.fax} */}
                  </li>
                </ul>
                <p>Services:</p>
              </StyledPopup>
            </Marker>
          ))}
        </StyledMapContainer>
      </MapWrapperDiv>
    </div>
  );
}
