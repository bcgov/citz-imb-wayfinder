/* eslint-disable react/no-array-index-key */
/**
 * @summary About + Contact Section for the Wayfinder Application
 * @author LocalNewsTV, Dallas Richmond
 */
import { useEffect } from 'react';
import {
  AboutContainer,
  StyledP,
  StyledHeaderTwo,
  ContentContainer,
  StyledAddress,
  Link,
  StyledUl,
  StyledLi,
  StyledHeaderThree,
} from './aboutcontact.styles';
import pkg from '../../../package.json';
import { aboutContent } from '../../content/content';
import contactInfo from '../../content/contactInfo';
import useAppService from '../../services/app/useAppService';
import { localStorageKeyExists } from '../../utils/AppLocalStorage';
import constants from '../../constants/Constants';
import OnlineCheck from '../../utils/OnlineCheck';

export default function AboutContact() {
  const { state, setAnalytics } = useAppService();
  const { lang } = state.settings;
  const geolocationKnown = localStorageKeyExists(constants.CURRENT_LOCATION_KEY);
  const latitude = state.currentLocation ? state.currentLocation.lat : 49.2827;
  const longitude = state.currentLocation ? state.currentLocation.long : -123.2;

  useEffect(() => {
    if (state.settings.analytics_opt_in && geolocationKnown) {
      const analytics = {
        latitude,
        longitude,
        usage: {
          function: 'about',
        },
      };

      if (state.settings.offline_mode) {
        setAnalytics(false, analytics);
      } else {
        OnlineCheck()
          .then((Online) => {
            setAnalytics(Online, analytics);
          });
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AboutContainer>
      <ContentContainer>
        <StyledP>
          Wayfinder&nbsp;V
          {pkg.version}
        </StyledP>
        <StyledHeaderTwo>{aboutContent.aboutTitle[lang]}</StyledHeaderTwo>
        <StyledP>
          {aboutContent.about[lang]}
        </StyledP>
        <StyledP>
          {aboutContent.aboutTeam[lang]}
        </StyledP>
        <StyledHeaderThree>
          {aboutContent.matthewTitle[lang]}
        </StyledHeaderThree>
        <StyledP>
          {aboutContent.matthewBio[lang]}
        </StyledP>
        <StyledHeaderThree>
          {aboutContent.tylerTitle[lang]}
        </StyledHeaderThree>
        <StyledP>
          {aboutContent.tylerBio[lang]}
        </StyledP>
        <StyledHeaderThree>
          {aboutContent.dallasTitle[lang]}
        </StyledHeaderThree>
        <StyledP>
          {aboutContent.dallasBio[lang]}
        </StyledP>
        <StyledHeaderTwo>
          {aboutContent.withThanksTitle[lang]}
        </StyledHeaderTwo>
        <StyledP>
          {aboutContent.withThanks[lang]}
        </StyledP>
        <StyledUl>
          {aboutContent.imbMembers[lang].map((item: string, index: number) => (
            <StyledLi key={index}>{item}</StyledLi>
          ))}
        </StyledUl>
        <StyledHeaderTwo>{aboutContent.disclaimerTitle[lang]}</StyledHeaderTwo>
        <StyledUl>
          {(aboutContent.disclaimer[lang]).map((point: string, index: number) => (
            <StyledLi key={index}>{point}</StyledLi>))}
        </StyledUl>
        <StyledHeaderTwo>{aboutContent.contactTitle[lang]}</StyledHeaderTwo>
        <StyledP>
          {aboutContent.contact[lang]}
        </StyledP>
        <StyledAddress>
          {aboutContent.aboutTitle[lang]}
          :&nbsp;
          <Link href={`mailto:${contactInfo.email}?subject='Wayfinder App'`}>{contactInfo.team}</Link>
          <br />
          {aboutContent.mailingAddressTitle[lang]}
          :&nbsp;
          {contactInfo.mailing}
          <br />
          {aboutContent.githubRepo[lang]}
          :&nbsp;
          <Link href={contactInfo.repo}>{aboutContent.viewIt[lang]}</Link>
        </StyledAddress>
      </ContentContainer>
    </AboutContainer>
  );
}
