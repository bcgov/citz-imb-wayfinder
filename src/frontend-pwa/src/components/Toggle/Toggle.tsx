/**
 * @summary A reusable component that creates a basic toggle component
 * @param ariaLabel - an accessibility label for the input
 * @param onChange - is a function that is called when the slider value changes
 * @type {(ariaLabel : string, onChange: (value: boolean) => void)}
 * @author Dallas Richmond
 */
import { useState } from 'react';
import StyledToggle from './toggle.styles';

export type ToggleProps = {
  ariaLabel: string;
  onChange: (checked: boolean) => void;
  defaultChecked: boolean;
};

export default function Toggle({ ariaLabel, onChange, defaultChecked = false }: ToggleProps) {
  const [checked, setChecked] = useState(defaultChecked);

  const handleChange = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    onChange(newChecked);
  };

  return <StyledToggle aria-label={ariaLabel} type="checkbox" checked={checked} onChange={handleChange} />;
}
