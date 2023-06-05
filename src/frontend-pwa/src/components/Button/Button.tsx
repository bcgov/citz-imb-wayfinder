/**
 * Purpose: This is the controller for the Wayfinder API's Reporting function
 *          this service is designed to take in reports from users, lint them
 *          and post them to a database
 */

import StyledButton from './button.styles';

export type ButtonVariants = 'default' | 'primary' | 'secondary';
export type ButtonSizes = 'sm' | 'md' | 'lg';

export type ButtonProps = {
  handleClick?: () => void;
  variant: ButtonVariants, // dictates coloring
  size: ButtonSizes, // breakpoints will go here
  disabled: boolean;
  text: string;
}

export function Button({
  handleClick,
  variant,
  size = 'md',
  disabled = false,
  text,
}: ButtonProps) {
  return (
    <StyledButton
      onClick={handleClick}
      variant={variant}
      size={size}
      disabled={disabled}
      value=""
    >
      {text}
    </StyledButton>
  );
}

Button.defaultProps = {
  handleClick: () => {}, // Provide a default empty function
};
