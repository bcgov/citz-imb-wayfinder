import { useState } from 'react';

export type ToggleProps = {
  accessibility: string;
  onChange: (checked: boolean) => void;
  defaultChecked: boolean;
}

export default function Toggle({
  accessibility,
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
        aria-label={accessibility}
        type="checkbox"
        checked={checked}
        onChange={handleChange}
      />
    </div>
  );
}
