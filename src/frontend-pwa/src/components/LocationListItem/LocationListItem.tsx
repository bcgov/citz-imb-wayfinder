/**
 * @summary A reusable component that returns a table row item to be displayed in a list
 * @param itemData - is the data passed in to be displayed in each list item
 * @type {(itemData : SingleLocation)}
 * @author Dallas Richmond
 */
import SingleLocation from '../../Type/SingleLocation';

import {
  TableData,
  TableRow,
  TableDataWrapper,
} from './locationlistitem.styles';

export type ListItemProps = {
  itemData: SingleLocation;
  locationDistance: string;
}

export default function LocationListItem({
  itemData,
  locationDistance,
}: ListItemProps) {
  return (
    <TableRow>
      <TableData>
        <TableDataWrapper>{itemData.locale}</TableDataWrapper>
      </TableData>
      <TableData>
        <TableDataWrapper>
          {`${locationDistance} KM`}
        </TableDataWrapper>
      </TableData>
    </TableRow>
  );
}
