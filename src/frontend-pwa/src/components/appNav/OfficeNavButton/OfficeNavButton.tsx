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
  disabled: boolean;
  route: string;
}

export default function OfficeNavButton({
  hex,
  icon,
  text,
  disabled,
  route,
}: ButtonProps) {
  return (
    <Link to={disabled ? '#' : route} style={{ textDecoration: 'none' }}>
      <ButtonCont
        hex={hex}
        disabled={disabled}
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
