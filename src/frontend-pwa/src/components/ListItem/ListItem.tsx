import SingleLocation from '../../Type/SingleLocation';

import {
  TableData,
  TableRow,
  TableDataWrapper,
} from './listitem.styles';

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
        <TableDataWrapper>Placeholder</TableDataWrapper>
      </TableData>
    </TableRow>
  );
}
