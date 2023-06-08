/**
 * @summary Settings view for the application
 * @author Dallas Richmond
 */
import Slider from '../../components/Slider/Slider';
import Toggle from '../../components/Toggle/Toggle';
import NavButton from '../../components/NavButton/NavButton';
import {
  SettingsContainer,
  Section,
  Title,
} from './settings.styles';

export default function Settings() {
  const handleSliderChange = () => {
    //  TODO Slider logic goes here
  };

  const handleToggleChange = () => {
    //  TODO Toggle logic goes here
  };

  return (
    <SettingsContainer>
      <Section>
        <h1>Settings</h1>
      </Section>
      <Section>
        <Title>Location Range (KM)</Title>
        <Slider
          ariaLabel="Location Range"
          min={1}
          max={100}
          onChange={handleSliderChange}
        />
      </Section>
      <Section>
        <Title>Darkmode</Title>
        <Toggle
          ariaLabel="Darkmode Toggle"
          onChange={handleToggleChange}
          defaultChecked
        />
      </Section>
      <Section>
        <Title>Analytics</Title>
        <Toggle
          ariaLabel="Analytics Toggle"
          onChange={handleToggleChange}
          defaultChecked
        />
      </Section>
      <Section>
        <NavButton
          path="/settings/about"
          text="About/Contact"
          size="md"
        />
        <NavButton
          path="/settings/eula"
          text="Terms of Use"
          size="md"
        />
      </Section>
    </SettingsContainer>
  );
}
