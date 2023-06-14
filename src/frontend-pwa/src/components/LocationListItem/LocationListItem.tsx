/**
 * @summary A reusable component that returns a table row item to be displayed in a list
 * @param itemData - is the data passed in to be displayed in each list item
 * @type {(itemData : SingleLocation)}
 * @author Dallas Richmond
 */

/* eslint-disable prefer-template */
/* eslint-disable max-len */
import SingleLocation from '../../Type/SingleLocation';
import CalcDistance from '../../utils/CalcDistance';

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
  return (
    <TableRow>
      <TableData>
        <TableDataWrapper>{itemData.locale}</TableDataWrapper>
      </TableData>
      <TableData>
        <TableDataWrapper>
          {CalcDistance({
            itemData,
          }) + ' KM'}
        </TableDataWrapper>
      </TableData>
    </TableRow>
  );
}
