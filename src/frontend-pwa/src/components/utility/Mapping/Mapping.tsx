/**
 * TODO:    - resize "Marker" icon
 *          - finalize what data will be shown within popup
 *          - move some types to constants
 *
 * @summary - Visualize user location and a list of BCservice locations onto map of British Columbia
 *          - provides limited contact information for relevant location via popup
 *          - Map is capable of rendering both online/offline, albeit at a reduced level of detail
 *
 * @param   MappingProps - passes in {lat, long} as currentLocationType, and passes
 *                       a list of BCService locations as a LocationsArray
 * @type    {MappingProps}
 *
 * @param   CurrentLocationType - passes the navigator's lat/long as a single object
 * @type    {CurrentLocationType}
 *
 * @author  Tyler Maloney, LocalNewsTV
 */
import { Link } from 'react-router-dom';
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
  PopupInfo,
} from './mapping.styles';
import SingleLocation from '../../../Type/SingleLocation';
import LocationsArray from '../../../Type/LocationsArray';
import { Button } from '../../common';
import { mappingContent } from '../../../content/content';
import useAppService from '../../../services/app/useAppService';

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
  iconSize: [25, 45],
});

const redIcon = Leaflet.icon({
  iconUrl: redIconImage,
  iconRetinaUrl: redIconImageMobile,
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [25, 45],
});

export default function Mapping({ locations, currentLocation }: MappingProps) {
  const { state } = useAppService();
  const { lang } = state.settings;
  const lat = parseFloat(currentLocation?.lat);
  const long = parseFloat(currentLocation?.long);

  /**
   * const "onlineMode" renders true only if:
    - the application's offline mode box is not checked.
    - the application's online state is determined to be true.
   */
  const onlineMode = state.isOnline && !state.settings.offline_mode;
  const zoomLevel = onlineMode ? 12 : 7;
  const minZoomLevel = onlineMode ? 1 : 6;
  const maxZoomLevel = onlineMode ? 17 : 9;
  const tileLayerUrl = onlineMode
    ? 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    : '/mapTiles/{z}/{x}/{y}.png';

  return (
    <MapWrapperDiv>
      { !isNaN(lat)
      && (
      <MapWrapperDiv>
        <StyledMapContainer
          center={[lat, long]}
          zoom={zoomLevel}
          minZoom={minZoomLevel}
          maxZoom={maxZoomLevel}
          scrollWheelZoom
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url={tileLayerUrl}
          />
          <Marker icon={redIcon} position={[lat, long]}>
            <Popup>
              <h3>{mappingContent.currLocation[lang]}</h3>
              <p>
                {mappingContent.currLat[lang]}
                {currentLocation.lat}
              </p>
              <p>
                {mappingContent.currLong[lang]}
                {currentLocation.long}
              </p>
            </Popup>
          </Marker>
          {locations.map((item: SingleLocation, index: number) => (
            // eslint-disable-next-line react/no-array-index-key
            <Marker icon={baseIcon} key={index} position={[item.latitude, item.longitude]}>
              <StyledPopup>
                <h3>{item.locale}</h3>
                <PopupInfo>
                  {mappingContent.type[lang]}
                  {(item.serviceType[0].toUpperCase()
                  + item.serviceType.substring(1, item.serviceType.length))}
                </PopupInfo>
                <PopupInfo>
                  {mappingContent.address[lang]}
                  {item.address.label}
                </PopupInfo>
                <PopupInfo>
                  {mappingContent.phone[lang]}
                  <Link to={`tel:+${item.contact?.phone?.replaceAll('-', '').replaceAll(' ', '')}`}>{item.contact?.phone}</Link>
                </PopupInfo>
                <Link to={`/location/${item.serviceType}/${item.locale}`}>
                  <Button
                    text="More Info"
                    variant="primary"
                    size="sm"
                    disabled={false}
                  />
                </Link>
              </StyledPopup>
            </Marker>
          ))}
        </StyledMapContainer>
      </MapWrapperDiv>
      )}
    </MapWrapperDiv>
  );
}
