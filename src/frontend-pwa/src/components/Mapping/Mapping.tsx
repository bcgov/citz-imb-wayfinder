/**
 * TODO:    - resize "Marker" icon
 *          - finalize what data will be shown within popup
 *          - move some types to constants
 *
 * @summary - Visualize user location and a list of BCservice locations onto map of British Columbia
 *          - provides limited contact information for relevant location via popup
 *          - Map does not render offline
 *
 * @param   MappingProps - passes in {lat, long} as currentLocationType, and passes
 *                       a list of BCService locations as a LocationsArray
 * @type    {(locations: LocationsArray, currentLocation: CurrentLocationType)}
 *
 * @param   CurrentLocationType - passes the navigator's lat/long as a single object
 * @type    {(lat: string, long: string)}
 *
 * @author  Tyler Maloney
 */
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/images/marker-shadow.png';
import {
  TileLayer,
  Marker,
  Popup,
} from 'react-leaflet';
import * as Leaflet from 'leaflet';
import baseIconImage from '/marker-icon.png';
import baseIconImageMobile from '/marker-icon-2x.png';
import redIconImage from '/marker-icon-red.png';
import redIconImageMobile from '/marker-icon-2x-red.png';

import {
  MapWrapperDiv,
  StyledPopup,
  StyledMapContainer,
} from './mapping.styles';
import SingleLocation from '../../Type/SingleLocation';
import LocationsArray from '../../Type/LocationsArray';

type CurrentLocationType = {
  lat: string;
  long: string;
}

type MappingProps = {
  locations: LocationsArray;
  currentLocation: CurrentLocationType;
}

const baseIcon = Leaflet.icon({
  iconUrl: baseIconImage,
  iconRetinaUrl: baseIconImageMobile,
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [25, 55],
});

const redIcon = Leaflet.icon({
  iconUrl: redIconImage,
  iconRetinaUrl: redIconImageMobile,
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [25, 55],
});

export default function Mapping({ locations, currentLocation }: MappingProps) {
  const lat = parseFloat(currentLocation?.lat);
  const long = parseFloat(currentLocation?.long);

  return (
    <MapWrapperDiv>
      { !isNaN(lat)
      && (
      <MapWrapperDiv>
        <StyledMapContainer
          center={[lat, long]}
          zoom={12}
          scrollWheelZoom
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker icon={redIcon} position={[lat, long]}>
            <Popup>
              <h4>You are here!</h4>
            </Popup>
          </Marker>
          {locations.map((item: SingleLocation, index: number) => (
            // eslint-disable-next-line react/no-array-index-key
            <Marker icon={baseIcon} key={index} position={[item.latitude, item.longitude]}>
              <StyledPopup>
                <h3>
                  Location:&nbsp;
                  {item.locale}
                </h3>
                <p>
                  Address:&nbsp;
                  {item.address.label}
                </p>
                <p>Contact Info:</p>
                <ul>
                  <li>
                    Phone Number:&nbsp;
                    {item.contact?.phone}
                  </li>
                </ul>
                <a href={item.website.toString()} target="_blank" rel="noopener noreferrer">
                  Link to website
                </a>
              </StyledPopup>
            </Marker>
          ))}
        </StyledMapContainer>
      </MapWrapperDiv>
      )}
    </MapWrapperDiv>
  );
}
