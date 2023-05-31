/* eslint-disable react/no-array-index-key */
import ListItem from '../ListItem/ListItem';

export type ListItemsProps = {
  items: Array<object>;
}

export default function ListItems({
  items,
}: ListItemsProps) {
  return (
    <table>
      <tbody>
        {items.map((data, index) => <ListItem data={data} key={index} />)}
      </tbody>
    </table>
  );
}
