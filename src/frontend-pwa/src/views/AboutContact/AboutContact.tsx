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

export default function AboutContact() {
  const contact = {
    email: 'wayfinderdevelopers@gmail.com',
    repo: 'https://github.com/bcgov/citz-imb-wayfinder',
    mailing: '4000 Seymour, Victoria, V8X\u00A04S7',
    team: 'Team Wayfinder',
  };
  const info = {
    aboutTeam: 'This app was developed as a capstone project for three Camosun college students in the summer of 2023. Their names and roles are:',
    tyler: {
      title: 'Tyler Maloney, Full stack Developer',
      bio: 'Tyler Maloney is an aspiring software developer with a fondness for problem-solving, woodworking, and learning. He has completed a series of self-directed projects, the most impressive of which is a VR FPS written in C#. Tyler also has familiarity with a bevy of languages and their associated tools, such as JavaScript, React, and Python. Tyler\'s soft skills work in fine complement to his technical abilities, as his personable and friendly demeanour helps him create professional relationships with colleagues and clients alike.',
    },
    dallas: {
      title: 'Dallas Richmond, Frontend Lead',
      bio: 'Dallas Richmond has a diverse education in astronomy, physics, and information systems. He switched from astronomy and physics to pursue the ICS diploma at Camosun College due to his passion for coding and its problem-solving potential. He enhanced his React and back-end development skills during his co-op at Gist Applications. Dallas is proficient in C++, C#, Java, JavaScript, HTML and CSS. He is a quick learner, a team player, and committed to continuously improving his skills as he anticipates the future of technology',
    },
    matthew: {
      title: 'Matthew Logan, Backend Lead',
      bio: 'Matthew Logan is a former Red Seal chef turned full-stack developer. Since attending Camosun College, Matthew has gained skills in web development, backend APIs and databases. Transitioning from chef to full-stack developer demonstrates his ability to pivot and adapt to new challenges. He is committed to continuous learning and improving his skills to stay current with industry trends. Matthew is a team player who collaborates effectively to deliver high-quality solutions.',
    },
    disclaimer: [
      'This project is open sourced for fair use, with attribution',
      'this work carries no warranty or implied guarantee',
      'All third party libraries are those of their rightful owners or licensees',
      'BC Government theme \u00A9 by the Government of BC',
    ],
    about: 'Wayfinder is an app that points people towards the government services they need. This is a proof of concept that provides an extensible platform to add new services and locations to over time. It is also a powerful analytics tool showing where people are and what they need which can help us know what services to create going forward!',
    contact: 'Reach out to us and tell us your thoughts! We are building something new and welcome any growth opportunities you can give us. We will do our best to be available and responsive to your feedback. Thank you for being a part of Wayfinder!',
  };
  return (
    <AboutContainer>
      <ContentContainer>
        <StyledP>
          Wayfinder&nbsp;V
          {pkg.version}
        </StyledP>
        <StyledHeaderTwo>About</StyledHeaderTwo>
        <StyledP>
          {info.about}
        </StyledP>
        <StyledP>
          {info.aboutTeam}
        </StyledP>
        <StyledHeaderThree>
          {info.tyler.title}
        </StyledHeaderThree>
        <StyledP>
          {info.tyler.bio}
        </StyledP>
        <StyledHeaderThree>
          {info.dallas.title}
        </StyledHeaderThree>
        <StyledP>
          {info.dallas.bio}
        </StyledP>
        <StyledHeaderThree>
          {info.matthew.title}
        </StyledHeaderThree>
        <StyledP>
          {info.matthew.bio}
        </StyledP>
        <StyledHeaderTwo>Disclaimer</StyledHeaderTwo>
        <StyledUl>
          {info.disclaimer.map((point, index) => <StyledLi key={index}>{point}</StyledLi>)}
        </StyledUl>
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
