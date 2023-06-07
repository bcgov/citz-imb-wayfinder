/**
 * @summary The main view for the application
 * @author Dallas Richmond
 */
import NavButton from '../../components/NavButton/NavButton';

import {
  Wrapper,
  ButtonWrapper,
} from './home.styles';

export default function Home() {
  return (
    <Wrapper>
      <ButtonWrapper>
        <NavButton
          path="/location"
          text="Locate a Service"
        />
      </ButtonWrapper>
      <ButtonWrapper>
        <NavButton
          path="/services"
          text="Find BC Services"
        />
      </ButtonWrapper>
      <ButtonWrapper>
        <NavButton
          path="/report"
          text="Report an Event"
        />
      </ButtonWrapper>
    </Wrapper>
  );
}
