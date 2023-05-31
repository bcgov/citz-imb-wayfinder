import { useState } from 'react';

export type ToggleProps = {
  ariaLabel: string;
  onChange: (checked: boolean) => void;
  defaultChecked: boolean;
}

export default function Toggle({
  ariaLabel,
  onChange,
  defaultChecked = false,
}: ToggleProps) {
  const [checked, setChecked] = useState(defaultChecked);

  const handleChange = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    onChange(newChecked);
  };

  return (
    <div>
      <input
        aria-label={ariaLabel}
        type="checkbox"
        checked={checked}
        onChange={handleChange}
      />
    </div>
  );
}
