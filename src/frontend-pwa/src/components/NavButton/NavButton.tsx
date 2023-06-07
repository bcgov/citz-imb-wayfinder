/**
 * @summary A reusable component used for routing to different pages
 * @param content - is the content that will render between the routing Link
 * @param path - is the path the Link will route to
 * @type {(content: React.ReactNode, path: string)}
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
