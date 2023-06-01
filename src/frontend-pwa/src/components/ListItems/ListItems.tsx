/* eslint-disable react/no-array-index-key */
import ListItem from '../ListItem/ListItem';
import SingleLocation from '../../Type/SingleLocation';

import {
  Container,
  Table,
  TableHeader,
  TableRow,
  TableHeaderWrapper,
} from './listitems.style';

export type ListItemsProps = {
  items: Array<SingleLocation>;
}

export default function ListItems({
  items,
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
          {items.map((data, index) => <ListItem itemData={data} key={index} />)}
        </tbody>
      </Table>
    </Container>
  );
}
