export type ListItemProps = {
  data: object;
}

export default function ListItem({
  data,
}: ListItemProps) {
  console.log('Item: ', data);
  return (
    <tr>
      <td>{}</td>
    </tr>
  );
}
