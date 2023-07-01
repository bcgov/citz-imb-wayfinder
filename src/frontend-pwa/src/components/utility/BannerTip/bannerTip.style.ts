/**
 * @summary Styling for BannerTip Component
 * @author  LocalNewsTV
 */

import styled from '@emotion/styled';
import mq from '../../../constants/mq';

type BannerContainerProps = {
  disabled: boolean;
}
export const BannerContainer = styled.div<BannerContainerProps>`
  display: ${(props) => (props.disabled ? 'none' : 'flex')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 65pt;
  z-index: 2005;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: #DBE1EB;
  border-bottom: 2px solid black;
  padding: 1em;
  margin: 0;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (min-width: ${mq.tablet}){
    padding-left: 4em;
  }
`;
export const StyledToolTip = styled.p`
  width: 100%;
  text-align: left;
  word-wrap: normal;
  color: black;
  margin: 0;
`;
export const Exit = styled.img`
  margin: 0;
  padding: 0;
`;
export const ExitCont = styled.div`
  margin: 0 1em;
`;
