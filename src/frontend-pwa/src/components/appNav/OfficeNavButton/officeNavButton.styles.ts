/**
 * @summary Styling for RoutingLink component
 * @author LocalNewsTV
 */
import styled from '@emotion/styled';

type NavProps = {
  hex: string;
  disabled: boolean;
}
export const ButtonCont = styled.div<NavProps>`
  height: 55pt;
  width: 240pt;
  border-radius: 8pt 0 0 8pt;
  align-items: center;
  justify-content: flex-start;
  background: linear-gradient(to right, ${({ hex, disabled }) => (disabled ? '#666' : hex)} 10%, #FFF);
  padding: 5pt;
  display: flex;
  margin: 3pt;
  cursor: ${(({ disabled }) => (disabled ? 'not-allowed' : 'pointer'))};
  &:hover, &:active {
    transform: scale(${(({ disabled }) => (disabled ? 1 : 0.97))});
  }
`;

export const ImageCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60pt;
  height: 60pt;
  border-radius: 8pt;
  margin: 0 0 0 10pt;
  padding: 0;
`;

export const TextCont = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  justify-content: center;
  font-size: 16pt;
  text-wrap: auto;
  width: 100%;
  height: 70pt;
  color: #003366;
  margin: 0;
  padding: 0 2em 0 0;
`;
export const Image = styled.img`
  height: 100%;
  display: flex;
  margin: 0;
  padding: 0;
  justify-content: center;
  align-items: center;
`;
