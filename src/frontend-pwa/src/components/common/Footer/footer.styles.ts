/**
 * @summary Styles for Footer component
 * @author Dallas Richmond, LocalNewsTV
 */
import styled from '@emotion/styled';
import typography from '../../../typography';
import mq from '../../../constants/mq';

export const FooterWrapper = styled.footer`
  ${typography.toString()}
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2000;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 65px;
  width: 100%;
  background-color: #036;
  color: #FFF;
  border-top: 2px solid #FCBA19;
  padding: 0;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  width: 100dvw;
  max-width: ${mq.tablet};
  text-align: center;
  height: 46px;
  @media (min-width: ${mq.desktop}){
    display: none;
  }
`;
