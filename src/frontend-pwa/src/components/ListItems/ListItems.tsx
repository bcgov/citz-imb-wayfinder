/* eslint-disable react/no-array-index-key */
import ListItem from '../ListItem/ListItem';

export type ListItemsProps = {
  items: Array<object>;
}

export default function ListItems({
  items,
}: ListItemsProps) {
  console.log('Here: ', items[0]);
  return (
    <table>
      <tbody>
        {items.map((data, index) => <ListItem address="Test" key={index} />)}
      </tbody>
    </table>
  );
}
