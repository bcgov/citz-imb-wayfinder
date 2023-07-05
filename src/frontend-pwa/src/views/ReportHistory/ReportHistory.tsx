/* eslint-disable react/no-array-index-key */
import { useState } from 'react';
import ReportHistoryListItem from '../../components/lists/ReportHistoryListItem/ReportHistoryListItem';
import {
  ContentContainer,
  StyledP,
  ViewContainer,
  HistoryRow,
} from './reportHistory.style';
import constants from '../../constants/Constants';
import { getDataFromLocalStorage, localStorageKeyExists } from '../../utils/AppLocalStorage';
import { ListItems } from '../../components/lists';
import useAppService from '../../services/app/useAppService';
import { reportHistoryContent } from '../../content/content';
import Report from '../../Type/Report';

function ReportHistory() {
  const popReport = (ticketNum: string) => {
    alert(ticketNum);
  };
  const { state } = useAppService();
  const { lang } = state.settings;
  const [currReport, setCurrReport] = useState({} as Report);
  if (!localStorageKeyExists(constants.REPORTS_KEY)) {
    return (
      <ViewContainer>
        <ContentContainer>
          <p>No Report History</p>
        </ContentContainer>
      </ViewContainer>
    );
  }
  const userReportHistory = getDataFromLocalStorage(constants.REPORTS_KEY);
  console.log(userReportHistory);
  return (
    <ViewContainer>
      <ContentContainer>
        <h2>{reportHistoryContent.historyHeader[lang]}</h2>
        <HistoryRow>
          <StyledP>
            {reportHistoryContent.locationTitle[lang]}
          </StyledP>
          { currReport.latitude && currReport.longitude
          && (
          <StyledP>
            {`[${currReport.latitude}, ${currReport.longitude}]`}
          </StyledP>
          )}
        </HistoryRow>
        <HistoryRow>
          <StyledP>{reportHistoryContent.ticketNumTitle[lang]}</StyledP>
          <StyledP>{currReport?.ticketNum}</StyledP>
        </HistoryRow>
        <HistoryRow>
          <StyledP>{reportHistoryContent.submitTitle[lang]}</StyledP>
          <StyledP>{currReport?.time ? new Date(currReport.time.toString()).toDateString() : ''}</StyledP>
        </HistoryRow>
        <HistoryRow>
          <StyledP>{reportHistoryContent.detailsTitle[lang]}</StyledP>
          <StyledP>{currReport?.details}</StyledP>
        </HistoryRow>
        <ListItems headers={reportHistoryContent.headers[lang]}>
          {userReportHistory.map((entry: Report, index: number) => (
            <ReportHistoryListItem
              data={entry}
              key={index}
              setState={setCurrReport}
              deleteEntry={popReport}
            />
          ))}
        </ListItems>
      </ContentContainer>
    </ViewContainer>
  );
}

export default ReportHistory;
