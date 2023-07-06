/* eslint-disable react/jsx-indent */
/* eslint-disable max-len */
/**
 * @summary Settings view for the application
 * @author  Dallas Richmond, LocalNewsTV
 */
import { useState } from 'react';
import { Slider, Toggle } from '../../components/common';
import { NavButton } from '../../components/appNav';
import {
  SettingsContainer,
  Section,
  Title,
  SliderWrapper,
  SettingsWrapper,
  TitleWrapper,
  StyledSelect,
} from './settings.styles';
import file from '/file-text.svg';
import person from '/person-lines-fill.svg';
import useAppService from '../../services/app/useAppService';
import MoreInfoButton from '../../components/common/MoreInfoButton/MoreInfoButton';
import { SettingsContent } from '../../content/content';

export default function Settings() {
  const { setSettings, updateSettings, state } = useAppService();
  const [locationRangeValue, setLocationRangeValue] = useState(state.settings.location_range);
  const [offlineToggleValue, setOfflineToggleValue] = useState(state.settings.offline_mode);
  const [analyticsToggleValue, setAnalyticsToggleValue] = useState(state.settings.analytics_opt_in);
  const [lang, setLang] = useState(state.settings.lang || 'eng');
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

  /**
   * @summary Handles the change of the language select
   * @param e is the event object of the select component
   * @type {( e: { target: { value: React.SetStateAction<string> } } )}
   * @author LocalNewsTV, Dallas Richmond
   */
  const handleLang = (e: { target: { value: string } }) => {
    setLang(e.target.value);
    setSettings({ language: e.target.value });
    updateSettings();
  };

  return (
    <SettingsWrapper>
      <SettingsContainer>
        <Section>
          <h1>{SettingsContent.settingsTitle[lang]}</h1>
        </Section>
        <Section>
          <TitleWrapper>
            <Title>{SettingsContent.language[lang]}</Title>
            <MoreInfoButton
              tip={SettingsContent.languageToolTip[lang]}
            />
          </TitleWrapper>
          <StyledSelect onChange={handleLang} value={lang} defaultValue={lang}>
            {SettingsContent.languages[lang].map((data: string, index: number) => (
            <option value={SettingsContent.languages.keys[index]} key={data}>{data}</option>
            ))}
          </StyledSelect>
        </Section>
        <Section>
          <SliderWrapper>
            <TitleWrapper>
              <Title>{SettingsContent.locationRange[lang]}</Title>
              <MoreInfoButton
                tip={SettingsContent.locationToolTip[lang]}
              />
            </TitleWrapper>
            <Slider
              ariaLabel={SettingsContent.locationRange[lang]}
              min={1}
              max={1000}
              onChange={handleLocationRangeChange}
              value={locationRangeValue}
            />
          </SliderWrapper>
        </Section>
        <Section>
          <TitleWrapper>
            <Title>{SettingsContent.offlineMode[lang]}</Title>
            <MoreInfoButton
              tip={SettingsContent.offlineModeToolTip[lang]}
            />
          </TitleWrapper>
          <Toggle
            ariaLabel={SettingsContent.offlineMode[lang]}
            onChange={handleOfflineToggleChange}
            value={offlineToggleValue}
          />
        </Section>
        <Section>
          <TitleWrapper>
            <Title>{SettingsContent.analytics[lang]}</Title>
            <MoreInfoButton
              tip={SettingsContent.analyticsToolTip[lang]}
            />
          </TitleWrapper>
          <Toggle
            ariaLabel={SettingsContent.analytics[lang]}
            onChange={handleAnalyticsToggleChange}
            value={analyticsToggleValue}
          />
        </Section>
        <Section>
          <NavButton
            path="/settings/about"
            text={SettingsContent.aboutContact[lang]}
            hex="#DBE1EB"
            icon={person}
          />
        </Section>
        <Section>
          <NavButton
            path="/eula"
            text={SettingsContent.license[lang]}
            hex="#DBE1EB"
            icon={file}
          />
        </Section>
      </SettingsContainer>
    </SettingsWrapper>
  );
}
