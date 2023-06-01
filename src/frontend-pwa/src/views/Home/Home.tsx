import {
  Link,
} from 'react-router-dom';
import { Button } from '../../components/Button/Button';

import {
  Wrapper,
  ButtonWrapper,
} from './home.styles';

export default function Home() {
  return (
    <Wrapper>
      <ButtonWrapper>
        <Link to="/location">
          <Button
            variant="primary"
            size="lg"
            disabled={false}
            text="Locate a Service"
          />
        </Link>
      </ButtonWrapper>
      <ButtonWrapper>
        <Link to="/services">
          <Button
            variant="primary"
            size="lg"
            disabled={false}
            text="Find BC Services"
          />
        </Link>
      </ButtonWrapper>
      <ButtonWrapper>
        <Link to="/report">
          <Button
            variant="primary"
            size="lg"
            disabled={false}
            text="Report an Event"
          />
        </Link>
      </ButtonWrapper>
    </Wrapper>
  );
}
