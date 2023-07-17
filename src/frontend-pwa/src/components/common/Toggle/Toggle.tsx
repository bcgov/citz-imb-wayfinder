/**
 * @summary A reusable component that creates a basic toggle component
 * @param ariaLabel - an accessibility label for the input
 * @param onChange - is a function that is called when the toggle value changes
 * @type {(ariaLabel : string, onChange: (value: boolean) => void)}
 * @author Dallas Richmond
 */
import ReactSwitch from 'react-switch';

export type ToggleProps = {
  ariaLabel: string;
  onChange: (checked: boolean) => void;
  value: boolean;
};

export default function Toggle({ ariaLabel, onChange, value }: ToggleProps) {
  const handleChange = () => {
    const newChecked = !value;
    onChange(newChecked);
  };

  return (
    <ReactSwitch
      aria-label={ariaLabel}
      checked={value}
      onChange={handleChange}
    />
  );
}
