import { TableData, TableRow, TableDataWrapper } from './serviceslistitem.styles';

export const headers: Array<string> = ['Service'];

type Props = {
  service: string;
}
export function ServiceListItem({ service }: Props) {
  return (
    <TableRow>
      <TableData>
        <TableDataWrapper>
          {service.replaceAll('.', '.\n')}
        </TableDataWrapper>
      </TableData>
    </TableRow>
  );
}
