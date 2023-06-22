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
}

export default function OfficeNavButton({
  hex,
  icon,
  text,
  disabled,
}: ButtonProps) {
  return (
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
  );
}
