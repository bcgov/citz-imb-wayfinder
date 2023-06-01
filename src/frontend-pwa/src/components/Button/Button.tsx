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
  size,
  disabled,
  text,
}: ButtonProps) {
  return (
    <StyledButton
      onClick={() => handleClick}
      variant={variant}
      size={size}
      disabled={disabled}
      value="update"
    >
      {text}
    </StyledButton>
  );
}

Button.defaultProps = {
  handleClick: () => {}, // Provide a default empty function
};
