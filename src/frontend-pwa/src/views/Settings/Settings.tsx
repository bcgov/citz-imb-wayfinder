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
import { localStorageKeyExists } from '../../utils/AppLocalStorage';
import constants from '../../constants/Constants';
import OnlineCheck from '../../utils/OnlineCheck';
import Analytic from '../../Type/Analytic';

export default function Settings() {
  const {
    setAppData,
    setSettings,
    updateSettings,
    setAnalytics,
    state,
  } = useAppService();
  const [locationRangeValue, setLocationRangeValue] = useState(state.settings.location_range);
  const [offlineToggleValue, setOfflineToggleValue] = useState(state.settings.offline_mode);
  const [analyticsToggleValue, setAnalyticsToggleValue] = useState(state.settings.analytics_opt_in);
  const [lang, setLang] = useState(state.settings.lang || 'eng');
  const [initialSettingsState] = useState(state.settings);
  const [locationRangeAnalytics, setLocationRangeAnalytics] = useState(true);
  const onlineCheck = state.isOnline && !state.settings.offline_mode;
  const geolocationKnown = localStorageKeyExists(constants.CURRENT_LOCATION_KEY);
  const latitude = state.currentLocation ? state.currentLocation.lat : 49.2827;
  const longitude = state.currentLocation ? state.currentLocation.long : -123.2;
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
    if (locationRangeAnalytics) {
      handleSettingAnalytics();
    }
    setLocationRangeAnalytics(false);
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
    handleSettingAnalytics();
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
    handleSettingAnalytics();
  };

  /**
   * @summary Pulls in new app data if user hit the refresh button
   * @author  Dallas Richmond
   */
  const handleRefresh = () => {
    setAppData(onlineCheck);
  };

  /**
   * @summary Creates new analytic objects and send them depending on which ones were changed
   * @author  Dallas Richmond
   */
  const handleSettingAnalytics = () => {
    if (state.settings.analytics_opt_in && geolocationKnown) {
      const changedSettings = [] as Analytic[];
      if (initialSettingsState.lang !== state.settings.lang) {
        const analytics = {
          latitude,
          longitude,
          usage: {
            function: 'settings',
            settings: {
              valueStr: state.settings.lang,
              settingType: 'language',
            },
          },
        };
        changedSettings.push(analytics);
      }
      if (initialSettingsState.location_range !== state.settings.location_range) {
        const analytics = {
          latitude,
          longitude,
          usage: {
            function: 'settings',
            settings: {
              valueStr: state.settings.location_range,
              settingType: 'location range',
            },
          },
        };
        changedSettings.push(analytics);
      }
      if (initialSettingsState.offline_mode !== state.settings.offline_mode) {
        const analytics = {
          latitude,
          longitude,
          usage: {
            function: 'settings',
            settings: {
              valueStr: state.settings.offline_mode,
              settingType: 'offline mode',
            },
          },
        };
        changedSettings.push(analytics);
      }
      if (state.settings.offline_mode) {
        changedSettings.forEach((analyticData: Analytic) => {
          setAnalytics(false, analyticData);
        });
      } else {
        OnlineCheck()
          .then((Online) => {
            changedSettings.forEach((analyticData: Analytic) => {
              setAnalytics(Online, analyticData);
            });
          });
      }
    }
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
