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
import useAppService from '../../../services/app/useAppService';

function BannerTip() {
  const { state, setToolTipText } = useAppService();

  const handleClear = () => { setToolTipText(''); };
  useEffect(() => {
    if (state.toolTipText) {
      setTimeout(handleClear, (15000));
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
