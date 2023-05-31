export type ListItemProps = {
 address: string;
}

export default function ListItem({
  address,
}: ListItemProps) {
  console.log('Item: ', address);
  return (
    <tr>
      <td>{address}</td>
    </tr>
  );
}
