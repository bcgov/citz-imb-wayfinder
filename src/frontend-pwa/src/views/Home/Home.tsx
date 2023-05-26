import {
  Link,
} from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Wayfinder</h1>
      <Link to="/location">
        <button type="button">Locate a Service</button>
      </Link>
      <Link to="/services">
        <button type="button">Find BC Services</button>
      </Link>
      <Link to="/report">
        <button type="button">Report an Event</button>
      </Link>
    </div>
  );
}
