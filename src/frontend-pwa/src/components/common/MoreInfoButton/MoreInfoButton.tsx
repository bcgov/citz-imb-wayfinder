/**
 * @summary Companion Component for BannerTip.
 *          used to trigger State used by BannerTip to display
 * @author  LocalNewsTV, Dallas Richmond
 */
import { Image, ImageContainer } from './moreInfoButton.style';
import info from '/iconography/MoreInfo.svg';
import useAppService from '../../../services/app/useAppService';

type MoreInfoProps = {
  tip: string;
}
function MoreInfoButton({
  tip,
}:MoreInfoProps) {
  const { setToolTipText } = useAppService();
  return (
    <ImageContainer>
      <Image
        src={info}
        onClick={() => setToolTipText(tip)}
      />
    </ImageContainer>
  );
}

export default MoreInfoButton;
