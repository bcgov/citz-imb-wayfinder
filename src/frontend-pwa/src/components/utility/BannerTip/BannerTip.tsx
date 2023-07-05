/**
 * @summary Banner for giving Tips and info to users, self destructs after period of time
 *          Can be closed early with exit button
 * @type    {BannerProps}
 * @author  LocalNewsTV, Dallas Richmond
 */
import { useEffect } from 'react';
import {
  BannerContainer,
  Exit,
  ExitCont,
  StyledToolTip,
} from './bannerTip.style';
import clearicon from '/iconography/ClearWhite.svg';
import useAppService from '../../../services/app/useAppService';

type BannerProps = {
  seconds: number
}

function BannerTip({
  seconds,
}: BannerProps) {
  const { state, setToolTipText } = useAppService();

  const handleClear = () => { setToolTipText(''); };
  useEffect(() => {
    if (state.toolTipText) {
      setTimeout(handleClear, (seconds * 1000));
    }
  });
  return (
    <BannerContainer disabled={!state.toolTipText}>
      <StyledToolTip>
        {state.toolTipText}
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
