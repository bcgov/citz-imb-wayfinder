import styled from '@emotion/styled';
import typography from '../../typography';

type ButtonProps = {
  onClick: any;
  variant: string,
  size: string,
  disabled: boolean,
}

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
  color: ${(props) => (props.variant === 'primary' ? '#003366' : 'hotpink')};
`;

export default StyledButton;
