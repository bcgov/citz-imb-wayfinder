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
} from './aboutcontact.styles';

export default function AboutContact() {
  const contact = {
    email: 'wayfinderdevelopers@gmail.com',
    repo: 'https://github.com/bcgov/citz-imb-wayfinder',
    mailing: '4000 Seymour, Victoria, V8X\u00A04S7',
    team: 'Team Wayfinder',
  };
  const info = {
    about: 'The "Wayfinder" application is a mobile application that directs citizens and employees to government services. The Wayfinder proof of concept provides an extensible platform that allows new services and locations to be added as they become available. Another use case for the Wayfinder app is the ability to process application generated analytics data allowing the product team to analyze valuable usage data that will inform the creation of new services that can be delivered using the Wayfinder app.',
    contact: 'Please don\'t hesitate to reach out to us using the provided contact information above. We welcome any inquiries, feedback, or opportunities for further discussion. We will make every effort to respond to your message in a timely manner. Thank you for considering us, and we look forward to hearing from you soon.',
  };
  return (
    <AboutContainer>
      <ContentContainer>
        <StyledHeaderTwo>About</StyledHeaderTwo>
        <StyledP>
          {info.about}
        </StyledP>
        <StyledHeaderTwo>Contact</StyledHeaderTwo>
        <StyledP>
          {info.contact}
        </StyledP>
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
