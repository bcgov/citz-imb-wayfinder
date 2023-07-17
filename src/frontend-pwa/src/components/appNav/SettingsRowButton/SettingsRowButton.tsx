/**
 * @summary A reusable nav button component used for routing to different pages
 * @param path - is the path the Link will route to
 * @param text - is the text displayed on the button
 * @param hex - HexValue for the Nav Button background
 * @param icon - Image to place in Nav Container
 * @type {(path: string, text: string, icon: string, hex: string)}
 * @author Dallas Richmond
 */
import {
  Link,
} from 'react-router-dom';

import nextArrow from '/next-arrow.svg';

import {
  ButtonCont,
  ImageCont,
  TextCont,
  Image,
} from './settingsRowButton.styles';

export type RoutingLinkProps = {
  path: string;
  text: string;
}

export default function NavButton({
  path,
  text,
}: RoutingLinkProps) {
  return (
    <Link to={path} style={{ textDecoration: 'none', width: '100%' }}>
      <ButtonCont>
        <TextCont>
          {text}
        </TextCont>
        <ImageCont>
          <Image src={nextArrow} alt={text} />
        </ImageCont>
      </ButtonCont>
    </Link>
  );
}
