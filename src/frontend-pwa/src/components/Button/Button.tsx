/**
 * @summary This is a common button component for use in our application.
 * @author Tyler Maloney
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
