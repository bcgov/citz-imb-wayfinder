/* eslint-disable react/no-array-index-key */
/**
 * @summary Page for viewing past reports
 * @desc    Report History View pulls all reports in localstorage and displays them in
 *          one convenient view for a user to reference their old reports
 *          View features Delete operations so users can remove and old reports they no longer need
 *          This view does not link to a database, so users cannot affect database entries directly
 * @author  LocalNewsTV
 */
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ReportHistoryListItem from '../../components/lists/ReportHistoryListItem/ReportHistoryListItem';
import {
  ContentContainer,
  StyledP,
  ViewContainer,
  HistoryRow,
  InfoDiv,
  DetailsTA,
  DetailSection,
  StyledHeaderTwo,
} from './reportHistory.style';
import contactInfo from '../../content/contactInfo';
import constants from '../../constants/Constants';
import { getDataFromLocalStorage, localStorageKeyExists, saveDataToLocalStorage } from '../../utils/AppLocalStorage';
import { ListItems } from '../../components/lists';
import useAppService from '../../services/app/useAppService';
import { reportHistoryContent } from '../../content/content';
import Report from '../../Type/Report';
import MoreInfoButton from '../../components/common/MoreInfoButton/MoreInfoButton';

function ReportHistory() {
  const { state } = useAppService();
  const { lang } = state.settings;
  const [currReport, setCurrReport] = useState({} as Report);
  const [deletionID, setDeletionID] = useState('');
  const [reports, setReports] = useState([]);
  useEffect(() => {
    if (localStorageKeyExists(constants.REPORTS_KEY)) {
      setReports(getDataFromLocalStorage(constants.REPORTS_KEY).reverse());
    }
  }, []);
  /**
   * @desc  Filters the stores list of data, removing the selected one
   *        Updates LocalStorage with updated information
   * @param ticketNum ID of the ticket being removed
   */
  const popReport = (ticketNum: string) => {
    const temp = reports.filter((data: Report) => data.ticketNum !== ticketNum);
    setReports(temp);
    saveDataToLocalStorage(constants.REPORTS_KEY, temp);
    setCurrReport({} as Report);
  };
  if (reports.length === 0) {
    return (
      <ViewContainer>
        <ContentContainer>
          <p>{reportHistoryContent.noReports[lang]}</p>
        </ContentContainer>
      </ViewContainer>
    );
  }
  return (
    <ViewContainer>
      <ContentContainer>
        <StyledHeaderTwo>{reportHistoryContent.historyHeader[lang]}</StyledHeaderTwo>
        <HistoryRow>
          <InfoDiv>
            <StyledP>{reportHistoryContent.locationTitle[lang]}</StyledP>
            <MoreInfoButton
              tip={reportHistoryContent.locationTip[lang]}
            />
          </InfoDiv>
          { currReport.latitude && currReport.longitude
            ? (
              <StyledP>
                {`[${currReport.latitude}, ${currReport.longitude}]`}
              </StyledP>
            )
            : <StyledP>{reportHistoryContent.noValue[lang]}</StyledP>}
        </HistoryRow>
        <HistoryRow>
          <StyledP>{reportHistoryContent.submitTitle[lang]}</StyledP>
          <StyledP>
            {currReport?.time
              ? (new Date(currReport.time.toString()).toDateString())
              : reportHistoryContent.noValue[lang]}
          </StyledP>
        </HistoryRow>
        <HistoryRow>
          <InfoDiv>
            <StyledP>
              {reportHistoryContent?.ticketNumTitle[lang] || reportHistoryContent.noValue[lang]}
            </StyledP>
            <MoreInfoButton
              tip={reportHistoryContent.ticketNumTip[lang]}
            />
          </InfoDiv>
          {currReport?.ticketNum
            ? (
              <NavLink to={`mailto:${contactInfo.email}?subject=Ticket#${currReport?.ticketNum}`}>
                <StyledP>{currReport?.ticketNum}</StyledP>
              </NavLink>
            )
            : <StyledP>{reportHistoryContent.noValue[lang]}</StyledP>}
        </HistoryRow>
        <DetailSection>
          <InfoDiv>
            <StyledP>{reportHistoryContent.detailsTitle[lang]}</StyledP>
          </InfoDiv>
          <DetailsTA
            value={currReport?.details || ''}
            placeholder={reportHistoryContent.placeholder[lang]}
            rows={3}
            disabled
          />
        </DetailSection>
        <ListItems headers={reportHistoryContent.headers[lang]}>
          {reports.map((entry: Report, index: number) => (
            <ReportHistoryListItem
              data={entry}
              key={index}
              setState={setCurrReport}
              deleteEntry={popReport}
              deletionID={deletionID}
              setDeletionID={setDeletionID}
            />
          ))}
        </ListItems>
      </ContentContainer>
    </ViewContainer>
  );
}

export default ReportHistory;
