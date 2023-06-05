/**
 * @summary A reusable component that returns a table row item to be displayed in a list
 * @param itemData - is the data passed in to be displayed in each list item
 * @param currentLocation - is the current location of the user's device
 * @type {(itemData : SingleLocation, currentLocation : CurrentLocation)}
 * @author Dallas Richmond
 */

/* eslint-disable prefer-template */
/* eslint-disable max-len */
import SingleLocation from '../../Type/SingleLocation';
import CurrentLocation from '../../Type/CurrentLocation';
import CalcDistance from '../../utils/CalcDistance';

import {
  TableData,
  TableRow,
  TableDataWrapper,
} from './listitem.styles';

export type ListItemProps = {
  itemData: SingleLocation;
  currentLocation: CurrentLocation;
}

export default function ListItem({
  itemData,
  currentLocation,
}: ListItemProps) {
  return (
    <TableRow>
      <TableData>
        <TableDataWrapper>{itemData.locale}</TableDataWrapper>
      </TableData>
      <TableData>
        <TableDataWrapper>
          {CalcDistance({
            itemData,
            currentLocation,
          }) + ' KM'}
        </TableDataWrapper>
      </TableData>
    </TableRow>
  );
}
