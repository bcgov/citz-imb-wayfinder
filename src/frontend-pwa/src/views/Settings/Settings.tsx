import Slider from '../../components/Slider/Slider';
import Toggle from '../../components/Toggle/Toggle';

export default function Settings() {
  const handleSliderChange = () => {

  };

  const handleToggleChange = () => {

  };

  return (
    <div>
      <div>
        <h1>
          Settings
        </h1>
        <h2>
          Location Range (KM)
        </h2>
        <Slider
          accessibility="Location Range"
          min={1}
          max={100}
          onChange={handleSliderChange}
        />
      </div>
      <div>
        <h2>
          Darkmode
        </h2>
        <Toggle
          accessibility="Darkmode Toggle"
          onChange={handleToggleChange}
          defaultChecked
        />
      </div>
      <div>
        <h2>
          Analytics
        </h2>
        <Toggle
          accessibility="Analytics Toggle"
          onChange={handleToggleChange}
          defaultChecked
        />
      </div>
    </div>
  );
}
