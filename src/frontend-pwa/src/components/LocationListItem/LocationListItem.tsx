/**
 * @summary A reusable component that returns a table row item to be displayed in a list
 * @param itemData - is the data passed in to be displayed in each list item
 * @type {(itemData : SingleLocation)}
 * @author Dallas Richmond
 */
import SingleLocation from '../../Type/SingleLocation';
import CalcDistance from '../../utils/CalcDistance';
import { localStorageKeyExists } from '../../utils/AppLocalStorage';
import constants from '../../constants/Constants';
import useAppService from '../../services/app/useAppService';

import {
  TableData,
  TableRow,
  TableDataWrapper,
} from './locationlistitem.styles';

export type ListItemProps = {
  itemData: SingleLocation;
}

export default function LocationListItem({
  itemData,
}: ListItemProps) {
  const { state } = useAppService();
  const geolocationKnown = localStorageKeyExists(constants.CURRENT_LOCATION_KEY);
  const locationRange = state.settings.location_range;
  if (geolocationKnown) {
    const locationDistance = CalcDistance({ itemData });
    if (parseFloat(locationDistance) >= locationRange) {
      return null;
    }
    return (
      <TableRow>
        <TableData>
          <TableDataWrapper>{itemData.locale}</TableDataWrapper>
        </TableData>
        <TableData>
          <TableDataWrapper>
            {geolocationKnown ? `${locationDistance} KM` : ''}
          </TableDataWrapper>
        </TableData>
      </TableRow>
    );
  }
  return null;
}
