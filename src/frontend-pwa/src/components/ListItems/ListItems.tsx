/**
 * @summary A reusable component that creates a list of ListItem components
 * @param items - is an array of Single locations and their data
 * @param currentLocation - is the current location of the user's device
 * @type {(items : Attay<SingleLocation>, currentLocation : CurrentLocation)}
 * @author Dallas Richmond
 */

/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
import { ReactNode } from 'react';
import {
  Container,
  Table,
  TableHeader,
  TableRow,
  TableHeaderWrapper,
} from './listitems.style';

export type ListItemsProps = {
  headerOne: string;
  headerTwo: string;
  children: ReactNode;
}

export default function ListItems({
  headerOne = '',
  headerTwo = '',
  children,
}: ListItemsProps) {
  return (
    <Container>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>
              <TableHeaderWrapper>{headerOne}</TableHeaderWrapper>
            </TableHeader>
            <TableHeader>
              <TableHeaderWrapper>{headerTwo}</TableHeaderWrapper>
            </TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {children}
        </tbody>
      </Table>
    </Container>
  );
}
