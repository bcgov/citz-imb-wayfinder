/**
 * @summary Banner for giving Tips and info to users, self destructs after period of time
 *          Can be closed early with exit button
 * @type    {BannerProps}
 * @author  LocalNewsTV
 */
import { useEffect } from 'react';
import {
  BannerContainer,
  Exit,
  ExitCont,
  StyledToolTip,
} from './bannerTip.style';
import clearicon from '/iconography/ClearWhite.svg';

type BannerProps = {
  text: string;
  setText: (text: any) => void;
  seconds: number
}

function BannerTip({
  text,
  setText,
  seconds,
}: BannerProps) {
  const handleClear = () => { setText(''); };
  useEffect(() => {
    if (text) {
      setTimeout(handleClear, (seconds * 1000));
    }
  });
  return (
    <BannerContainer disabled={!text}>
      <StyledToolTip>
        {text}
      </StyledToolTip>
      <ExitCont>
        <Exit
          src={clearicon}
          alt="Close"
          onClick={handleClear}
        />
      </ExitCont>
    </BannerContainer>
  );
}

export default BannerTip;
