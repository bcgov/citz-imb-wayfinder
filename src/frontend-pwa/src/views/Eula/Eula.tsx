/**
 * @summary This is the EULA page, set to display when it is detected
 *          that the user has not given their consent.
 * @author Tyler Maloney
 */
/* eslint-disable max-len */

import { useState } from 'react';
import { Button } from '../../components/Button/Button';
import { StyledContainer, StyledOuterDiv, StyledFieldSetDiv } from './eula.styles';
import Toggle from '../../components/Toggle/Toggle';

export type EulaProps = {
    setEula: (eula: boolean) => void;
}

export default function Eula({
  setEula,
}: EulaProps) {
  const [consent, setConsent] = useState(false);
  const handleConsentChange = () => {
    setConsent(!consent);
  };
  return (
    <StyledOuterDiv>
      <StyledContainer>
        <h1>EULA</h1>
        <br />
        <p>
          The BC Wayfinder App (the “Licensed Application”) allows you (“You” or “you”) to find local government services. This
          End User License Agreement (“EULA”) sets out the terms and conditions that apply to you when you download
          and/or use the BC Wayfinder App. This EULA is a legal agreement between you, as the end user of the Licensed
          Application (“You” or “you”), and His Majesty the King in Right of the Province of British Columbia (the
          “Province”). You may access the Licensed Application on either a Google or Apple mobile device, or a computer. Some of the
          terms that follow reference Google or Apple, as applicable, and such references will apply only to the extent
          that you are accessing the Licensed Application through that particular platform. By indicating that you agree
          to this EULA, and in consideration of the use of the Licensed Application, you agree to the following.
        </p>
        <p>
          To accept the terms and conditions of this EULA and to download and/or use the Licensed Application,
          you must be, and you represent and warrant that you are: (a) at least nineteen (19) years of age; or (b) if
          you are under 19, you have obtained the consent of your parent or guardian to accept this Agreement on your
          behalf, in which case your parent or guardian is responsible for your use of the Licensed Application. If
          you have not met these requirements, you must not access or use the Licensed Application.
        </p>
        <p>
          The License will terminate automatically in the event that you fail to comply with any of the terms
          and conditions of this EULA or if any of your representations or warranties are or become inaccurate or
          untruthful. The Province also reserves the right to terminate this License for any reason, in its sole
          discretion. In the event of termination of this License you must: (a) immediately stop using the Licensed
          Application; and (b) delete or destroy all copies of the Licensed Application in your possession or under
          your control.
        </p>
        <p>
          The License will terminate automatically in the event that you fail to comply with any of the terms
          and conditions of this EULA or if any of your representations or warranties are or become inaccurate or
          untruthful. The Province also reserves the right to terminate this License for any reason, in its sole
          discretion. In the event of termination of this License you must: (a) immediately stop using the Licensed
          Application; and (b) delete or destroy all copies of the Licensed Application in your possession or under
          your control.
          <p>
            You must not take any action in connection with your use of the Licensed Application that would
            jeopardize the security, integrity and/or availability of the Licensed Application, including, without
            limitation:
          </p>
          <ol type="I">
            <li>
              (a) using the Licensed Application for any unlawful or inappropriate purpose;
            </li>
            <li>
              (b) tampering with any portion of the Licensed Application;
            </li>
            <li>
              (c) using the Licensed Application to transmit any virus or other harmful or destructive computer code,
              files or programs or to conduct hacking and/or intrusion activities;
            </li>
            <li>
              (d) attempting to circumvent or subvert any security measure associated with the Licensed Application;
            </li>
            <li>
              (e) taking any action that might reasonably be construed as likely to adversely affect other users of the
              Licensed Application; or
            </li>
            <li>
              (f) removing or altering any proprietary symbol or notice, including any copyright notice, trademark or
              logo, displayed in connection with the Licensed Application.
            </li>
          </ol>
        </p>
        <p>
          This EULA and, as applicable, the additional terms referenced in these Terms, are the entire agreement
          between you and the Province with respect to the subject matter of this EULA. The headings in these Terms
          are inserted for convenience only and will not be used in interpreting or construing any provision of this
          EULA. If any provision of this EULA is invalid, illegal or unenforceable, that provision will be severed
          from this EULA and all other provisions will remain in full force and effect. This EULA will be governed by
          and construed in accordance with the laws of the province of British Columbia and the applicable laws of
          Canada. By using the Licensed Application, you consent to the exclusive jurisdiction and venue of the courts
          of the province of British Columbia, sitting in Victoria, for the hearing of any dispute arising from or
          related to this EULA and its subject matter.
        </p>
        <p>
          The Parties acknowledge that: (a) the Province may, in its sole discretion, provide maintenance and
          support of the Licensed Application, including troubleshooting, updates and modifications (the “Support
          Services”); (b) the Province is solely responsible for the provision of Support Services, if any; and (c)
          Apple has no obligation whatsoever to furnish any maintenance and support services with respect to the
          Licensed Application.
        </p>
        <fieldset>
          <legend>If you agree to the previous terms, check the box below and click the agree button</legend>
          <StyledFieldSetDiv>
            <center>
              <Toggle
                ariaLabel="Eula check"
                onChange={handleConsentChange}
                defaultChecked={consent}
              />
              <Button
                handleClick={() => setEula(true)}
                text="Submit"
                variant="primary"
                size="md"
                aria-label="submit button"
                disabled={!consent}
              />
            </center>
          </StyledFieldSetDiv>
        </fieldset>
      </StyledContainer>
    </StyledOuterDiv>
  );
}
