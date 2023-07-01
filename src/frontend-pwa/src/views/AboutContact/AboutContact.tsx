/* eslint-disable react/no-array-index-key */
/**
 * @summary About + Contact Section for the Wayfinder Application
 * @author LocalNewsTV
 */
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

export default function AboutContact() {
  const contact = {
    email: 'wayfinderdevelopers@gmail.com',
    repo: 'https://github.com/bcgov/citz-imb-wayfinder',
    mailing: '4000 Seymour, Victoria, V8X\u00A04S7',
    team: 'Team Wayfinder',
  };
  return (
    <AboutContainer>
      <ContentContainer>
        <StyledP>
          Wayfinder&nbsp;V
          {pkg.version}
        </StyledP>
        <StyledHeaderTwo>{aboutContent.aboutTitle.eng}</StyledHeaderTwo>
        <StyledP>
          {aboutContent.about.eng}
        </StyledP>
        <StyledP>
          {aboutContent.aboutTeam.eng}
        </StyledP>
        <StyledHeaderThree>
          {aboutContent.tylerTitle.eng}
        </StyledHeaderThree>
        <StyledP>
          {aboutContent.tylerBio.eng}
        </StyledP>
        <StyledHeaderThree>
          {aboutContent.dallasTitle.eng}
        </StyledHeaderThree>
        <StyledP>
          {aboutContent.dallasBio.eng}
        </StyledP>
        <StyledHeaderThree>
          {aboutContent.matthewTitle.eng}
        </StyledHeaderThree>
        <StyledP>
          {aboutContent.matthewBio.eng}
        </StyledP>
        <StyledHeaderThree>
          {aboutContent.jesseTitle.eng}
        </StyledHeaderThree>
        <StyledP>
          {aboutContent.jesseBio.eng}
        </StyledP>
        <StyledHeaderTwo>{aboutContent.disclaimerTitle.eng}</StyledHeaderTwo>
        <StyledUl>
          {(aboutContent.disclaimer.eng).map((point: string, index: number) => (
            <StyledLi key={index}>{point}</StyledLi>))}
        </StyledUl>
        <StyledHeaderTwo>{aboutContent.contactTitle.eng}</StyledHeaderTwo>
        <StyledP>
          {aboutContent.contact.eng}
        </StyledP>
        <StyledAddress>
          {aboutContent.aboutTitle.eng}
          :&nbsp;
          <Link href={`mailto:${contact.email}?subject='Wayfinder App'`}>{contact.team}</Link>
          <br />
          {aboutContent.mailingAddressTitle.eng}
          :&nbsp;
          {contact.mailing}
          <br />
          {aboutContent.githubRepo.eng}
          :&nbsp;
          <Link href={contact.repo}>{aboutContent.viewIt.eng}</Link>
        </StyledAddress>
      </ContentContainer>
    </AboutContainer>
  );
}
