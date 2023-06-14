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

import {
  TableData,
  TableRow,
  TableDataWrapper,
} from './locationlistitem.styles';

export type ListItemProps = {
  itemData: SingleLocation;
}

export default function ListItem({
  itemData,
}: ListItemProps) {
  const geolocationKnown = localStorageKeyExists(constants.CURRENT_LOCATION_KEY);

  return (
    <TableRow>
      <TableData>
        <TableDataWrapper>{itemData.locale}</TableDataWrapper>
      </TableData>
      <TableData>
        <TableDataWrapper>
          {geolocationKnown ? CalcDistance({
            itemData,
          }) : ''}
        </TableDataWrapper>
      </TableData>
    </TableRow>
  );
}
