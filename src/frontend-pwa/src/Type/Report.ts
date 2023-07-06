/**
 * @summary Type Definition for Report sent by a Wayfinder App user
 * @author LocalNewsTV
 */
type Report = {
  latitude: number;
  longitude: number;
  time: Date;
  eventType: string;
  details: string
  phone?: string
  ticketNum?: string
}
export default Report;
