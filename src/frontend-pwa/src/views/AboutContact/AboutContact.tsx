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
} from './aboutcontact.styles';
import constants from '../../constants/Constants';

/**
 * @returns TODO: Product Name, Versioning
 */
export default function AboutContact() {
  const contact = {
    email: 'wayfinderdevelopers@gmail.com',
    repo: 'https://github.com/bcgov/citz-imb-wayfinder',
    mailing: '4000 Seymour, Victoria, V8X\u00A04S7',
    team: 'Team Wayfinder',
  };
  const info = {
    aboutTeam: 'This application was created by a team of three Information and Computer System students from Camosun College in summer of 2023. The team consists of',
    teamList: [
      'Frontend Developers: Tyler\u00A0M & Dallas\u00A0R',
      'Backend Developer: Matthew\u00A0L',
      'UI/UX: Jesse\u00A0H',
      'Product Owner: Robert\u00A0K',
      'Technical Owner: Adam\u00A0K',
    ],
    disclaimer: [
      'This project is open sourced for fair use, with attribution',
      'this work carries no warranty or implied guarantee',
      'All third party libraries are those of their rightful owners or licensees',
      'BC Government theme \u00A9 by the Government of BC',
    ],
    about: 'The "Wayfinder" application is a mobile application that directs citizens and employees to government services. The Wayfinder proof of concept provides an extensible platform that allows new services and locations to be added as they become available. Another use case for the Wayfinder app is the ability to process application generated analytics data allowing the product team to analyze valuable usage data that will inform the creation of new services that can be delivered using the Wayfinder app.',
    contact: 'Please don\'t hesitate to reach out to us using the provided contact information above. We welcome any inquiries, feedback, or opportunities for further discussion. We will make every effort to respond to your message in a timely manner. Thank you for considering us, and we look forward to hearing from you soon.',
  };
  return (
    <AboutContainer>
      <ContentContainer>
        <StyledP>
          Wayfinder&nbsp;
          {constants.VER_KEY}
        </StyledP>
        <StyledHeaderTwo>About</StyledHeaderTwo>
        <StyledP>
          {info.about}
        </StyledP>
        <StyledP>
          {info.aboutTeam}
        </StyledP>
        <StyledUl>
          {info.teamList.map((person, index) => <StyledLi key={index}>{person}</StyledLi>)}
        </StyledUl>
        <StyledHeaderTwo>Contact</StyledHeaderTwo>
        <StyledP>
          {info.contact}
        </StyledP>
        <StyledHeaderTwo>Disclaimer</StyledHeaderTwo>
        <StyledUl>
          {info.disclaimer.map((point, index) => <StyledLi key={index}>{point}</StyledLi>)}
        </StyledUl>
        <StyledAddress>
          Email:&nbsp;
          <Link href={`mailto:${contact.email}?subject='Wayfinder App'`}>{contact.team}</Link>
          <br />
          Mailing Address:&nbsp;
          {contact.mailing}
          <br />
          GitHub Repo:&nbsp;
          <Link href={contact.repo}>View it here</Link>
        </StyledAddress>
      </ContentContainer>
    </AboutContainer>
  );
}
