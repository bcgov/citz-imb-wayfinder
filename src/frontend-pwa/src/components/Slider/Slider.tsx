import { useState } from 'react';

export type SliderProps = {
  min: number;
  max:number;
  onChange: (value: number) => void;
}

export default function Slider({
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
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
      />
      <p>
        {value}
        Km
      </p>
    </div>
  );
}
