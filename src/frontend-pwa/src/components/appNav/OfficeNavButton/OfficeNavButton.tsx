/**
 * @summary Customizable Navigation button
 *          Customizable Types:
 *                -hex color
 *                -Icons to display
 *                -routes to route to
 *                -disabled logic to implement
 * @type {{
 *          hex: string,
 *          icon: string,
 *          routes: string,
 *          disabled: boolean
 *        }}
 * @author LocalNewsTV
 */
import { Link } from 'react-router-dom';
import {
  ButtonCont,
  ImageCont,
  TextCont,
  Image,
} from './officeNavButton.styles';

type ButtonProps = {
  hex: string;
  icon: string;
  text: string;
  disabled?: boolean;
  route: string;
}

export default function OfficeNavButton({
  hex,
  icon,
  text,
  disabled = false,
  route,
}: ButtonProps) {
  return (
    <Link
      to={disabled ? '#' : route}
      style={{ textDecoration: 'none' }}
      role="button"
    >
      <ButtonCont
        hex={hex}
        disabled={disabled}
        aria-label={`${text} Button`}
      >
        <ImageCont>
          <Image src={icon} alt={text} />
        </ImageCont>
        <TextCont>
          {text}
        </TextCont>
      </ButtonCont>
    </Link>
  );
}

OfficeNavButton.defaultProps = {
  disabled: false,
};
