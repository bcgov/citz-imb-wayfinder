import { useState } from 'react';

export type SliderProps = {
  ariaLabel: string;
  min: number;
  max:number;
  onChange: (value: number) => void;
}

export default function Slider({
  ariaLabel,
  min,
  max,
  onChange,
}:SliderProps) {
  const [value, setValue] = useState(min);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10);
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <div>
      <input
        aria-label={ariaLabel}
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
      />
      <p>
        {value}
      </p>
    </div>
  );
}
