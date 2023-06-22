/**
 * @summary FooterNavButton Style sheet
 * @author LocalNewsTV
 */
import styled from '@emotion/styled';

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-direction column;
  height: 45pt;
  max-height: 45pt;
  width: 60px;
  align-items: center;
  justify-content: center;
  padding: 2pt;
  border-radius: 4pt;
  object-fit: contain;
  margin: 0;
  padding: 0;
  &:hover {
    cursor: pointer;
    transform: scale(0.9);
  }
  
`;
export const ButtonText = styled.p`
  text-decoration: none;
  color: white;
  display: flex;
  margin: 1pt 0 0 0 !important;
  padding: 0;
  font-size: 8pt;
`;
export const IconWrapper = styled.img`
  display: flex;
  margin: 0 !important;
  align-items: center;
  justify-content: center;
  max-height: 22pt;
  width: 22pt;
`;
