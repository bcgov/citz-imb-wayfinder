import Slider from '../../components/Slider/Slider';

export default function Settings() {
  const handleSliderChange = () => {

  };

  return (
    <div>
      <h1>
        Settings
      </h1>
      <h2>
        Location Range
      </h2>
      <Slider
        min={0}
        max={100}
        onChange={handleSliderChange}
      />
    </div>
  );
}
