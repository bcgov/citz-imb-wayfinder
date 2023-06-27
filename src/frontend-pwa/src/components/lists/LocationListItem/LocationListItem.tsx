/**
 * @summary A reusable component that returns a table row item to be displayed in a list
 * @param itemData - is the data passed in to be displayed in each list item
 * @type {(itemData : SingleLocation)}
 * @author Dallas Richmond
 */
import { Link } from 'react-router-dom';
import SingleLocation from '../../../Type/SingleLocation';

import {
  TableData,
  TableRow,
  TableDataWrapper,
} from './locationlistitem.styles';

export type ListItemProps = {
  itemData: SingleLocation;
  locationDistance: string;
  service?: string;
}

export default function LocationListItem({
  itemData,
  locationDistance,
  service = '',
}: ListItemProps) {
  return (
    <TableRow>
      <TableData>
        {service
          ? (
            <Link to={`/location/${service}/${itemData.locale}`} state={{ from: itemData }}>
              <TableDataWrapper>{itemData.locale}</TableDataWrapper>
            </Link>
          )
          : <TableDataWrapper>{itemData.locale}</TableDataWrapper>}
      </TableData>
      <TableData>
        <TableDataWrapper>
          {`${locationDistance} KM`}
        </TableDataWrapper>
      </TableData>
    </TableRow>
  );
}

LocationListItem.defaultProps = {
  service: '',
};
