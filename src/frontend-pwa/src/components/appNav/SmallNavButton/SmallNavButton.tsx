/**
 * @summary A small Nav button intended for the footer when in Mobile view
 * @param path The route to travel to
 * @param icon an svg image to use for the icon
 * @param text informative text for below the icon
 * @author LocalNewsTV
 */
import { Link } from 'react-router-dom';
import { ButtonText, IconWrapper, InputWrapper } from './SmallNavButton.styles';

type FooterProps = {
  path: string;
  icon: string;
  text: string;
}
export default function FooterNavButton({
  path,
  icon,
  text,
}: FooterProps) {
  return (
    <Link to={path} style={{ textDecoration: 'none' }}>
      <InputWrapper>
        <IconWrapper
          src={icon}
          alt={text}
        />
        <ButtonText>{text}</ButtonText>
      </InputWrapper>
    </Link>
  );
}
