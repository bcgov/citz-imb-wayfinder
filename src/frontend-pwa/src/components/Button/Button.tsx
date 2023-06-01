import StyledButton from './button.styles';

export type ButtonProps = {
  handleClick?: () => void;
  variant: 'default' | 'primary' | 'secondary', // dictates coloring
  size: 'sm' | 'md' | 'lg', // breakpoints will go here
  disabled: boolean;
}

export function Button({
  handleClick,
  variant,
  size,
  disabled,
}: ButtonProps) {
  return (
    <StyledButton
      onClick={() => handleClick}
      variant={variant}
      size={size}
      disabled={disabled}
      value="update"
    />
  );
}

Button.defaultProps = {
  handleClick: () => {}, // Provide a default empty function
};
