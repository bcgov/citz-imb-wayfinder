import Report from '../../../Type/Report';
import {
  DeleteIcon,
  DeleteTableData,
  TableData,
  TableRow,
} from './reportHistoryListItem.style';
import deleteIcon from '/clearicon.svg';

type ReportHistoryProps = {
  data: Report;
  setState: (RowData: Report) => void;
  deleteEntry: (ticketNum: string) => void;
}
function ReportHistoryListItem({
  data,
  setState,
  deleteEntry,
}: ReportHistoryProps) {
  const { time, eventType, ticketNum } = data;
  return (
    <TableRow onClick={() => setState(data)}>
      <TableData>{new Date(time.toString()).toDateString()}</TableData>
      <TableData>{eventType}</TableData>
      <DeleteTableData>
        <DeleteIcon
          src={deleteIcon}
          onClick={() => deleteEntry(ticketNum as string)}
        />
      </DeleteTableData>
    </TableRow>
  );
}

export default ReportHistoryListItem;
