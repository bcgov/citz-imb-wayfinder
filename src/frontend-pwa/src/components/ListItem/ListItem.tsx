import SingleLocation from '../../Type/SingleLocation';

export type ListItemProps = {
 itemData: SingleLocation;
}

export default function ListItem({
  itemData,
}: ListItemProps) {
  return (
    <tr>
      <td>{itemData.locale}</td>
    </tr>
  );
}
