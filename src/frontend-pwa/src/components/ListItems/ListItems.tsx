/**
 * @summary A reusable component that creates a list of ListItem components
 * @param items - is an array of Single locations and their data
 * @param currentLocation - is the current location of the user's device
 * @type {(items : Attay<SingleLocation>, currentLocation : CurrentLocation)}
 * @author Dallas Richmond
 */

/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
import ListItem from '../ListItem/ListItem';
import SingleLocation from '../../Type/SingleLocation';
import CurrentLocation from '../../Type/CurrentLocation';

import {
  Container,
  Table,
  TableHeader,
  TableRow,
  TableHeaderWrapper,
} from './listitems.style';

export type ListItemsProps = {
  items: Array<SingleLocation>;
  currentLocation: CurrentLocation;
}

export default function ListItems({
  items,
  currentLocation,
}: ListItemsProps) {
  return (
    <Container>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>
              <TableHeaderWrapper>Location</TableHeaderWrapper>
            </TableHeader>
            <TableHeader>
              <TableHeaderWrapper>Distance</TableHeaderWrapper>
            </TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {items.map((data, index) => <ListItem itemData={data} key={index} currentLocation={currentLocation} />)}
        </tbody>
      </Table>
    </Container>
  );
}
