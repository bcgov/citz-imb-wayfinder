/**
 * @summary List items for displaying Report History
 * @desc    List items for displaying Report history
 *          Shows the Event Type and Date in the row with a delete operation
 *          Uses passed in click handlers to add interactivity to the report function
 *          Uses dual confirmation with iconography before deleting entries
 * @type    {ReportHistoryProps}
 * @author  LocalNewsTV
 */
import Report from '../../../Type/Report';
import {
  DeleteIcon,
  TableData,
  TableRow,
} from './reportHistoryListItem.style';
import deleteIcon from '/clearicon.svg';
import trash from '/iconography/TrashRed.svg';

type ReportHistoryProps = {
  data: Report;
  deletionID: string;
  setDeletionID: (id: string) => void;
  setState: (RowData: Report) => void;
  deleteEntry: (ticketNum: string) => void;
}
function ReportHistoryListItem({
  data,
  setState,
  deleteEntry,
  deletionID,
  setDeletionID,
}: ReportHistoryProps) {
  const handleClick = () => {
    setState(data);
    setDeletionID('');
  };
  const { time, eventType, ticketNum } = data;
  return (
    <TableRow>
      <TableData onClick={handleClick}>
        {new Date(time.toString()).toDateString()}
      </TableData>
      <TableData onClick={handleClick}>
        {eventType}
      </TableData>
      <TableData>
        <DeleteIcon
          src={deletionID === ticketNum ? trash : deleteIcon}
          onClick={deletionID === ticketNum
            ? () => deleteEntry(ticketNum as string) : () => setDeletionID(ticketNum as string)}
        />
      </TableData>
    </TableRow>
  );
}

export default ReportHistoryListItem;
