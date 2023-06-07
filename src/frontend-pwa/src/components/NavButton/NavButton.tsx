/**
 * @summary A reusable nav button component used for routing to different pages
 * @param path - is the path the Link will route to
 * @param text - is the text displayed on the button
 * @type {(path: string, text: string)}
 * @author Dallas Richmond
 */
import {
  Link,
} from 'react-router-dom';
import { Button } from '../Button/Button';

export type RoutingLinkProps = {
  path: string;
  text: string;
}

export default function NavButton({
  path,
  text,
}: RoutingLinkProps) {
  return (
    <Link to={path}>
      <Button
        variant="primary"
        size="lg"
        disabled={false}
        text={text}
      />
    </Link>
  );
}
