/**
 * @summary Settings view for the application
 * @author Dallas Richmond
 */
import { useState } from 'react';
import Slider from '../../components/commonComponents/Slider/Slider';
import Toggle from '../../components/commonComponents/Toggle/Toggle';
import NavButton from '../../components/appNavComponents/NavButton/NavButton';
import {
  SettingsContainer,
  Section,
  Title,
  SliderWrapper,
  SettingsWrapper,
} from './settings.styles';
import file from '/file-text.svg';
import person from '/person-lines-fill.svg';
import useAppService from '../../services/app/useAppService';

export default function Settings() {
  const { setSettings, updateSettings, state } = useAppService();
  const [locationRangeValue, setLocationRangeValue] = useState(state.settings.location_range);
  const [offlineToggleValue, setOfflineToggleValue] = useState(state.settings.offline_mode);
  const [analyticsToggleValue, setAnalyticsToggleValue] = useState(state.settings.analytics_opt_in);

  /**
   * @summary Handles the change of the Location Range slider
   * @param value is the location range value of the slider
   * @type {( value: number )}
   * @author Dallas Richmond
   */
  const handleLocationRangeChange = (value: number) => {
    setLocationRangeValue(value);
    setSettings({ locationRange: value });
    updateSettings();
  };

  /**
   * @summary Handles the change of the Offline toggle
   * @param value is the offline toggle value
   * @type {( value: boolean )}
   * @author Dallas Richmond
   */
  const handleOfflineToggleChange = (value: boolean) => {
    setOfflineToggleValue(value);
    setSettings({ offlineMode: value });
    updateSettings();
  };

  /**
   * @summary Handles the change of the Analytic toggle
   * @param value is the analytics toggle value
   * @type {( value: boolean )}
   * @author Dallas Richmond
   */
  const handleAnalyticsToggleChange = (value: boolean) => {
    setAnalyticsToggleValue(value);
    setSettings({ analyticsOptIn: value });
    updateSettings();
  };

  return (
    <SettingsWrapper>
      <SettingsContainer>
        <Section>
          <h1>Settings</h1>
        </Section>
        <Section>
          <SliderWrapper>
            <Title>Location Range</Title>
            <Slider
              ariaLabel="Location Range"
              min={1}
              max={1000}
              onChange={handleLocationRangeChange}
              value={locationRangeValue}
            />
          </SliderWrapper>
        </Section>
        <Section>
          <Title>Offline Mode</Title>
          <Toggle
            ariaLabel="Offline Toggle"
            onChange={handleOfflineToggleChange}
            value={offlineToggleValue}
          />
        </Section>
        <Section>
          <Title>Analytics</Title>
          <Toggle
            ariaLabel="Analytics Toggle"
            onChange={handleAnalyticsToggleChange}
            value={analyticsToggleValue}
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
    </SettingsWrapper>
  );
}
