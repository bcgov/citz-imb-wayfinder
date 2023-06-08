/**
 * @summary A reusable component that creates a list of ListItem components
 * @param headers - List of headers to display at top of list
 * @param children - All items to render into the List
 * @type {(items : Array<SingleLocation>, currentLocation : CurrentLocation)}
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
  headers: Array<string>;
  children: ReactNode;
}

export default function ListItems({
  headers,
  children,
}: ListItemsProps) {
  return (
    <Container>
      <Table>
        <thead>
          <TableRow>
            {headers.map((header, index) => (
              <TableHeader key={index}>
                <TableHeaderWrapper>{header}</TableHeaderWrapper>
              </TableHeader>
            ))}
          </TableRow>
        </thead>
        <tbody>
          {children}
        </tbody>
      </Table>
    </Container>
  );
}
