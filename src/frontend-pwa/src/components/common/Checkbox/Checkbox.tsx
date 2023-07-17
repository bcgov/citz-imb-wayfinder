/**
 * @summary A reusable component that creates a basic checkbox component
 * @param ariaLabel - an accessibility label for the input
 * @param onChange - is a function that is called when the checkbox value changes
 * @type {(ariaLabel : string, onChange: (value: boolean) => void)}
 * @author Dallas Richmond
 */
import StyledCheckbox from './checkbox.styles';

export type CheckboxProps = {
  ariaLabel: string;
  onChange: (checked: boolean) => void;
  value: boolean;
};

export default function Checkbox({ ariaLabel, onChange, value }: CheckboxProps) {
  const handleChange = () => {
    const newChecked = !value;
    onChange(newChecked);
  };

  return (
    <StyledCheckbox
      aria-label={ariaLabel}
      type="checkbox"
      checked={value}
      onChange={handleChange}
    />
  );
}
