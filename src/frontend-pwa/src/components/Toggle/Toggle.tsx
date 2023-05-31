import { useState } from 'react';

export type ToggleProps = {
  onChange: (checked: boolean) => void;
  defaultChecked: boolean;
}

export default function Toggle({
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
        type="checkbox"
        checked={checked}
        onChange={handleChange}
      />
    </div>
  );
}
