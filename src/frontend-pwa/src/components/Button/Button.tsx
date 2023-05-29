import StyledButton from './button.styles';

export type ButtonProps = {
  // handleClick: void;
  // onClick: React.MouseEventHandler;
  variant: 'default' | 'primary' | 'secondary', // dictates coloring
  size: 'sm' | 'md' | 'lg', // breakpoints will go here
  disabled: boolean;
}

// export function Button(props: ButtonProps) {
//   const {
//     onClick, variant, size, disabled,
//   } = props;

export function Button({
  // handleClick,
  // onClick,
  variant, size, disabled,
}: ButtonProps) {
  return (
    <StyledButton
      onClick={() => handleClick()}
      variant={variant}
      size={size}
      disabled={disabled}
      value="update"
    />
  );
}

export function handleClick() {
  alert('buddy guy!');
}
