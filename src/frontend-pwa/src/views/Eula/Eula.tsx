/* eslint-disable react/no-array-index-key */
/**
 * @summary This is the EULA page, set to display when it is detected
 *          that the user has not given their consent.
 * @author Tyler Maloney
 */
/* eslint-disable max-len */
import { useState } from 'react';
import { Button, Toggle } from '../../components/common';
import { StyledContainer, StyledOuterDiv, StyledFieldSetDiv } from './eula.styles';
import useAppService from '../../services/app/useAppService';
import { eulaContent } from '../../content/content';

export default function Eula() {
  const [termAgreement, setTermAgreement] = useState(false);
  const { state, setEulaState } = useAppService();
  const { lang } = state.settings;
  const handleConsentChange = () => {
    setTermAgreement(!termAgreement);
  };
  return (
    <StyledOuterDiv>
      <StyledContainer>
        <h1>{eulaContent.terms[lang]}</h1>
        <br />
        <p>{eulaContent.eulaOne[lang]}</p>
        <p>{eulaContent.eulaTwo[lang]}</p>
        <p>{eulaContent.eulaThree[lang]}</p>
        <p>{eulaContent.eulaFour[lang]}</p>
        <ol type="I">
          {eulaContent.eulaList[lang].map((item: string, index: number) => <li key={index}>{item}</li>)}
        </ol>
        <p>{eulaContent.eulaFive[lang]}</p>
        <p>{eulaContent.eulaSix[lang]}</p>
        {!state.eulaAccepted && (
          <>
            <legend>{eulaContent.agreeStatement[lang]}</legend>
            <br />
            <StyledFieldSetDiv>
              <Toggle
                ariaLabel="Eula check"
                onChange={handleConsentChange}
                value={termAgreement}
              />
              <Button
                handleClick={() => setEulaState()}
                text={eulaContent.submit[lang]}
                variant="primary"
                size="md"
                aria-label="submit button"
                disabled={!termAgreement}
              />
            </StyledFieldSetDiv>
          </>
        )}
      </StyledContainer>
    </StyledOuterDiv>
  );
}
