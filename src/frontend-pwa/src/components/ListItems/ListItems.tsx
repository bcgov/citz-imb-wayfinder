/* eslint-disable react/no-array-index-key */
import ListItem from '../ListItem/ListItem';

export type ListItemsProps = {
  data: Array<object>;
}

export default function ListItems({
  data,
}: ListItemsProps) {
  return (
    <table>
      <tbody>
        {data.map((item, index) => <ListItem data={item} key={index} />)}
      </tbody>
    </table>
  );
}
