/**
 * @summary This is a universal button component for use in our application.
 * @param handleClick - stub function to designate what occurs if button is clicked.
 * @param variant - dictates button coloring.
 * @param size - dictates button size for general design or mobile reponsiveness.
 * @param disabled - determines whether button is clickable.
 * @param text - the text that will display within the button.
 * @author Tyler Maloney
 */

import StyledButton from './button.styles';

export type ButtonVariants = 'default' | 'primary' | 'secondary';
export type ButtonSizes = 'sm' | 'md' | 'lg';

export type ButtonProps = {
  handleClick?: () => void;
  variant: ButtonVariants,
  size: ButtonSizes,
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
