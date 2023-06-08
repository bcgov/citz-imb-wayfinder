/**
 * @summary A reusable nav button component used for routing to different pages
 * @param path - is the path the Link will route to
 * @param text - is the text displayed on the button
 * @param size - The predetermined size prop for the button
 * @type {(path: string, text: string)}
 * @author Dallas Richmond
 */
import {
  Link,
} from 'react-router-dom';
import { Button, ButtonSizes } from '../Button/Button';

export type RoutingLinkProps = {
  path: string;
  text: string;
  size: ButtonSizes;
}

export default function NavButton({
  path,
  text,
  size = 'lg',
}: RoutingLinkProps) {
  return (
    <Link to={path}>
      <Button
        variant="primary"
        size={size}
        disabled={false}
        text={text}
      />
    </Link>
  );
}
