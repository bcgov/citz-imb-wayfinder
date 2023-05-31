export type ListItemProps = {
  name: string;
}

export default function ListItem({
  name,
}: ListItemProps) {
  return (
    <tr>
      <td>{name}</td>
    </tr>
  );
}
