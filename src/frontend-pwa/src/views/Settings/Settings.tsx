/* eslint-disable react-hooks/exhaustive-deps */
/**
 * @summary Settings view for the application
 * @author Dallas Richmond
 */
import { useState } from 'react';
import Slider from '../../components/Slider/Slider';
import Toggle from '../../components/Toggle/Toggle';
import NavButton from '../../components/NavButton/NavButton';
import {
  SettingsContainer,
  Section,
  Title,
} from './settings.styles';
import file from '/file-text.svg';
import person from '/person-lines-fill.svg';
import useAppService from '../../services/app/useAppService';

export default function Settings() {
  const { setSettings, updateSettings, state } = useAppService();
  const [locationRangeValue, setLocationRangeValue] = useState(state.settings.location_range);

  const handleLocationRangeChange = (value: number) => {
    setLocationRangeValue(value);
    setSettings({ locationRange: value });
    updateSettings();
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
          onChange={handleLocationRangeChange}
          value={locationRangeValue}
        />
      </Section>
      <Section>
        <Title>Offline Mode</Title>
        <Toggle
          ariaLabel="Offline Toggle"
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
          hex="#DBE1EB"
          icon={person}
        />
      </Section>
      <Section>
        <NavButton
          path="/eula"
          text="License Agreement"
          hex="#DBE1EB"
          icon={file}
        />
      </Section>
    </SettingsContainer>
  );
}
