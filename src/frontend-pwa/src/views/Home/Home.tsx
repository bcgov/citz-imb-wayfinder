import {
  Link,
} from 'react-router-dom';
import { Button } from '../../components/Button/Button';

import {
  Wrapper,
} from './home.styles';

export default function Home() {
  return (
    <Wrapper>
      <Link to="/location">
        <Button
          variant="primary"
          size="lg"
          disabled={false}
        />
      </Link>
      <Link to="/services">
        <button type="button">Find BC Services</button>
      </Link>
      <Link to="/report">
        <button type="button">Report an Event</button>
      </Link>
    </Wrapper>
  );
}
