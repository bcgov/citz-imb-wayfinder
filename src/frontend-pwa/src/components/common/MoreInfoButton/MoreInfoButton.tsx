/**
 * @summary Companion Component for BannerTip.
 *          used to trigger State used by BannerTip to display
 * @author  LocalNewsTV
 */
import { Image, ImageContainer } from './moreInfoButton.style';
import info from '/iconography/MoreInfo.svg';

type MoreInfoProps = {
  tip: string;
  setText: (tip: any) => void;
}
function MoreInfoButton({
  tip,
  setText,
}:MoreInfoProps) {
  return (
    <ImageContainer>
      <Image
        src={info}
        onClick={() => setText(tip)}
      />
    </ImageContainer>
  );
}

export default MoreInfoButton;
