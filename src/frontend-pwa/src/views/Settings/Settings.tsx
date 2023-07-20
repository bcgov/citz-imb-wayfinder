/* eslint-disable react/jsx-indent */
/* eslint-disable max-len */
/**
 * @summary Settings view for the application
 * @author  Dallas Richmond, LocalNewsTV
 */
import { useState } from 'react';
import {
  Slider,
  Toggle,
  Accordion,
  Button,
} from '../../components/common';
import { SettingsRowButton } from '../../components/appNav';
import {
  Header,
  Section,
  Title,
  TitleWrapper,
  StyledSelect,
  SliderWrapper,
  SettingsContainer,
  ContentContainer,
} from './settings.styles';
import useAppService from '../../services/app/useAppService';
import MoreInfoButton from '../../components/common/MoreInfoButton/MoreInfoButton';
import { SettingsContent } from '../../content/content';

export default function Settings() {
  const {
    setAppData,
    setSettings,
    updateSettings,
    state,
  } = useAppService();
  const [locationRangeValue, setLocationRangeValue] = useState(state.settings.location_range);
  const [offlineToggleValue, setOfflineToggleValue] = useState(state.settings.offline_mode);
  const [analyticsToggleValue, setAnalyticsToggleValue] = useState(state.settings.analytics_opt_in);
  const [lang, setLang] = useState(state.settings.lang || 'eng');
  const onlineCheck = state.isOnline && !state.settings.offline_mode;
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

  /**
   * @summary Pulls in new app data if user hit the refresh button
   * @author  Dallas Richmond
   */
  const handleRefresh = () => {
    setAppData(onlineCheck);
  };

  return (
    <SettingsContainer>
      <Header>
        {SettingsContent.settingsTitle[lang]}
      </Header>
      <ContentContainer>
        <Accordion
          content={(
            <StyledSelect onChange={handleLang} value={lang}>
              {SettingsContent.languages[lang].map((data: string, index: number) => (
              <option value={SettingsContent.languages.keys[index]} key={data}>{data}</option>
              ))}
            </StyledSelect>
          )}
          text={SettingsContent.language[lang]}
          tooltip={(
            <MoreInfoButton
              tip={SettingsContent.languageToolTip[lang]}
            />
          )}
        />
        <Accordion
          content={(
            <SliderWrapper>
              <Slider
                ariaLabel={SettingsContent.locationRange[lang]}
                min={1}
                max={5000}
                onChange={handleLocationRangeChange}
                value={locationRangeValue}
              />
            </SliderWrapper>
          )}
          text={SettingsContent.locationRange[lang]}
          tooltip={(
            <MoreInfoButton
              tip={SettingsContent.locationRange[lang]}
            />
          )}
        />
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
        <Accordion
          content={(
            <Button
              handleClick={handleRefresh}
              variant="primary"
              size="sm"
              disabled={!onlineCheck}
              text={!onlineCheck ? 'Offline' : 'Refresh'}
            />
          )}
          text={(SettingsContent.refreshData[lang])}
        />
        <Section>
          <SettingsRowButton
            path="/settings/about"
            text={SettingsContent.aboutContact[lang]}
          />
        </Section>
        <Section>
          <SettingsRowButton
            path="/eula"
            text={SettingsContent.license[lang]}
          />
        </Section>
        <Section>
          <SettingsRowButton
            path="/settings/changelog"
            text={SettingsContent.changeLog[lang]}
          />
        </Section>
      </ContentContainer>
    </SettingsContainer>
  );
}
