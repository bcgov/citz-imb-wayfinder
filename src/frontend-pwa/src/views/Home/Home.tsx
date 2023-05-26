import {
  Link,
} from 'react-router-dom';

import {
  Wrapper,
} from './home.styles';

export default function Home() {
  return (
    <Wrapper>
      <Link to="/location">
        <button type="button">Locate a Service</button>
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
