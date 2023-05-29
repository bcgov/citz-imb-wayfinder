/* eslint-disable no-nested-ternary */
import styled from '@emotion/styled';
import typography from '../../typography';

type ButtonProps = {
  variant: string,
  size: string,
  disabled: boolean,
}

// function variantType(props:ButtonProps) {
//   if (props.variant === 'primary') {
//     background-color: ${(props) => (props.variant === 'primary' ? '#003366'
//   }
// }

const StyledButton = styled.button<ButtonProps>`
  ${typography.toString()}
  background-color: #003366;
  border: none;
  border-radius: 4px;
  padding: 12px 32px;
  text-align: center;
  text-decoration: none;
  display: block;
  font-size: 18px;
  font-family: ‘BCSans’, ‘Noto Sans’, Verdana, Arial, sans-serif;
  font-weight: 500;
  letter-spacing: 1px;
  cursor: pointer;
  background-color: ${(props) => (props.variant === 'primary' ? '#003366' : props.variant === 'secondary' ? '#FFFFFF' : '#000000')};
  
`;

export default StyledButton;
