/**
 * @summary A reusable component that creates a basic slider component
 * @param ariaLabel - an accessibility label for the input
 * @param min - is the minimum value of the slider
 * @param max - is the maximum value of the slider
 * @param onChange - is a function that is called when the slider value changes
 * @type {(ariaLabel : string, min : number, max: number, onChange: (value: number) => void)}
 * @author Dallas Richmond
 */
import {
  StyledSlider,
} from './slider.styles';

export type SliderProps = {
  ariaLabel: string;
  min: number;
  max: number;
  onChange: (value: number) => void;
  value: number;
}

export default function Slider({
  ariaLabel,
  min,
  max,
  value,
  onChange,
}:SliderProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10);
    onChange(newValue);
  };

  return (
    <div>
      <StyledSlider
        aria-label={ariaLabel}
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
      />
      <p>
        {`${value} KM`}
      </p>
    </div>
  );
}
