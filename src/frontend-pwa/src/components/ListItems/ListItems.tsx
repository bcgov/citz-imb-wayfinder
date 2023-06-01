/* eslint-disable react/no-array-index-key */
import ListItem from '../ListItem/ListItem';
import SingleLocation from '../../Type/SingleLocation';

export type ListItemsProps = {
  items: Array<SingleLocation>;
}

export default function ListItems({
  items,
}: ListItemsProps) {
  return (
    <table>
      <tbody>
        {items.map((data, index) => <ListItem itemData={data} key={index} />)}
      </tbody>
    </table>
  );
}
