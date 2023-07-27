/* eslint-disable no-console */
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
  ModalWrapper,
} from './settings.styles';
import useAppService from '../../services/app/useAppService';
import MoreInfoButton from '../../components/common/MoreInfoButton/MoreInfoButton';
import { SettingsContent } from '../../content/content';
import { localStorageKeyExists } from '../../utils/AppLocalStorage';
import constants from '../../constants/Constants';
import Analytic from '../../Type/Analytic';
import OnlineCheck from '../../utils/OnlineCheck';

export default function Settings() {
  const {
    setAppData,
    setSettings,
    updateSettings,
    setAnalytics,
    setMapsCache,
    state,
  } = useAppService();
  const [locationRangeValue, setLocationRangeValue] = useState(state.settings.location_range);
  const [offlineToggleValue, setOfflineToggleValue] = useState(state.settings.offline_mode);
  const [analyticsToggleValue, setAnalyticsToggleValue] = useState(state.settings.analytics_opt_in);
  const [lang, setLang] = useState(state.settings.lang || 'eng');
  const [isClearCacheModalOpen, setIsClearCacheModalOpen] = useState(false);
  const onlineCheck = state.isOnline && !state.settings.offline_mode;
  const geolocationKnown = localStorageKeyExists(constants.CURRENT_LOCATION_KEY);
  const latitude = state.currentLocation ? state.currentLocation.lat : 49.2827;
  const longitude = state.currentLocation ? state.currentLocation.long : -123.2;

  /**
   * @summary Handles the change of the Location Range slider
   * @param   value is the location range value of the slider
   * @type    {( value: number )}
   * @author  Dallas Richmond
   */
  const handleLocationRangeChange = (value: number) => {
    setLocationRangeValue(value);
    setSettings({ locationRange: value });
    updateSettings();
  };

  /**
   * @summary Handles the change of the Offline toggle
   * @param   value is the offline toggle value
   * @type    {( value: boolean )}
   * @author  Dallas Richmond
   */
  const handleOfflineToggleChange = (value: boolean) => {
    setOfflineToggleValue(value);
    setSettings({ offlineMode: value });
    updateSettings();

    if (state.settings.analytics_opt_in && geolocationKnown) {
      const analytics = {
        latitude,
        longitude,
        usage: {
          function: 'settings',
          settings: {
            valueBool: value,
            settingType: 'offline mode',
          },
        },
      };
      sendAnalytics(analytics);
    }
  };

  /**
   * @summary Handles the change of the Analytic toggle
   * @param   value is the analytics toggle value
   * @type    {( value: boolean )}
   * @author  Dallas Richmond
   */
  const handleAnalyticsToggleChange = (value: boolean) => {
    setAnalyticsToggleValue(value);
    setSettings({ analyticsOptIn: value });
    updateSettings();
  };

  /**
   * @summary Handles the change of the language select
   * @param   e is the event object of the select component
   * @type    {( e: { target: { value: React.SetStateAction<string> } } )}
   * @author  LocalNewsTV, Dallas Richmond
   */
  const handleLang = (e: { target: { value: string } }) => {
    setLang(e.target.value);
    setSettings({ language: e.target.value });
    updateSettings();

    if (state.settings.analytics_opt_in && geolocationKnown) {
      const analytics = {
        latitude,
        longitude,
        usage: {
          function: 'settings',
          settings: {
            valueStr: e.target.value,
            settingType: 'language',
          },
        },
      };
      sendAnalytics(analytics);
    }
  };

  /**
   * @summary Sends the analytic to the endpoint
   * @param   analytic is the data that will be sent to the analytic endpoint
   * @type    {(analytic: Analytic)}
   * @author  Dallas Richmond
   */
  const sendAnalytics = (analytic: Analytic) => {
    if (state.settings.offline_mode) {
      setAnalytics(false, analytic);
    } else {
      OnlineCheck()
        .then((Online) => {
          setAnalytics(Online, analytic);
        });
    }
  };

  /**
   * @summary Handles building the location range analytics
   * @author  Dallas Richmond
   */
  const handleLocationRangeAnalytics = () => {
    if (state.settings.analytics_opt_in && geolocationKnown) {
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
      sendAnalytics(analytics);
    }
  };

  /**
   * @summary Refreshes app data, builds analytics for usage of "refresh data button"
   * @author  Dallas Richmond
   */
  const handleRefresh = () => {
    setAppData(onlineCheck);
    if (state.settings.analytics_opt_in && geolocationKnown) {
      const analytics = {
        latitude,
        longitude,
        usage: {
          function: 'settings',
          settings: {
            settingType: 'refresh data',
          },
        },
      };
      sendAnalytics(analytics);
    }
  };

  /**
   * @summary Pulls in new map tile data if user hits the refresh button.
   *          Forces the page to unregister the service-worker and reload
   *          the window. This forces an updated service-worker to initialize
   *          and download, triggering assets to be downloaded anew.
   *
   *
   * @author  Dallas Richmond, Tyler Maloney
   */
  const handleMapTiles = () => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        registrations.forEach((registration) => {
          registration.unregister();
        });
      });
      navigator.serviceWorker.register('/sw.js')
        .then(() => {
          setMapsCache(true);
          window.location.reload();
        })
        .catch((error) => {
          console.error('Error registering service worker:', error);
        });
    }
  };

  /**
   * @summary Show the map tile confirmation modal to the user.
   * @author  Tyler Maloney
   */
  const handleClearCacheConfirm = () => {
    setIsClearCacheModalOpen(true);
  };

  /**
   * @summary Clears all mapTile data from browser cache,
   *          sets the mapsCached state to false,
   *          and closes the confirmation modal.
   * @author  Tyler Maloney, Dallas Richmond
   */
  const handleCacheModalConfirm = () => {
    if ('serviceWorker' in navigator) {
      caches.keys()
        .then((cacheNames) => {
          const precacheName = cacheNames.filter((cacheName) => cacheName.startsWith('workbox-precache-v2'));
          caches.open(precacheName[0])
            .then((cache) => {
              cache.keys()
                .then((keys) => {
                  keys.forEach((key) => {
                    if (key.url.includes('/mapTiles')) {
                      cache.delete(key.url);
                    }
                  });
                });
            });
        });
    }
    setMapsCache(false);
    setIsClearCacheModalOpen(false);
  };

  /**
   * @summary Closes the map tile confirmation modal.
   * @author  Tyler Maloney
   */
  const handleModalCancel = () => {
    setIsClearCacheModalOpen(false);
  };

  return (
    <SettingsContainer>
      <Header>{SettingsContent.settingsTitle[lang]}</Header>
      <ContentContainer>
        <Accordion
          content={(
            <StyledSelect onChange={handleLang} value={lang}>
              {SettingsContent.languages[lang].map((data: string, index: number) => (
                <option value={SettingsContent.languages.keys[index]} key={data}>
                  {data}
                </option>
              ))}
            </StyledSelect>
          )}
          text={SettingsContent.language[lang]}
          tooltip={<MoreInfoButton tip={SettingsContent.languageToolTip[lang]} />}
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
          tooltip={<MoreInfoButton tip={SettingsContent.locationRange[lang]} />}
          handleClick={handleLocationRangeAnalytics}
        />
        <Section>
          <TitleWrapper>
            <Title>{SettingsContent.offlineMode[lang]}</Title>
            <MoreInfoButton tip={SettingsContent.offlineModeToolTip[lang]} />
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
            <MoreInfoButton tip={SettingsContent.analyticsToolTip[lang]} />
          </TitleWrapper>
          <Toggle
            ariaLabel={SettingsContent.analytics[lang]}
            onChange={handleAnalyticsToggleChange}
            value={analyticsToggleValue}
          />
        </Section>
        <Accordion
          content={(
            <div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <Button
                  handleClick={handleRefresh}
                  variant="primary"
                  size="sm"
                  disabled={!onlineCheck}
                  text={!onlineCheck ? 'Offline' : 'Refresh'}
                />
              </div>
            </div>
          )}
          text={SettingsContent.refreshData[lang]}
          tooltip={<MoreInfoButton tip={SettingsContent.refreshDataToolTip[lang]} />}
        />
        <Accordion
          content={(
            <div>
              <div style={{ display: 'flex', gap: '10px' }}>
                {state.mapsCached ? (
                  <Button
                    handleClick={handleClearCacheConfirm}
                    variant="secondary"
                    size="sm"
                    disabled={!state.mapsCached}
                    text={SettingsContent.clearCache[lang]}
                  />
                ) : (
                  <Button
                    handleClick={handleMapTiles}
                    variant="primary"
                    size="sm"
                    disabled={!onlineCheck}
                    text={!onlineCheck ? 'Offline' : 'Refresh'}
                  />
                )}
                {/* Modal Component for Clear Cache Confirmation */}
                {isClearCacheModalOpen && (
                  <ModalWrapper>
                    <p>Are you sure you want to clear the cache data?</p>
                    <p>Offline map will be unavailable.</p>
                    <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                      <Button
                        handleClick={handleCacheModalConfirm}
                        variant="secondary"
                        size="sm"
                        text="Confirm"
                        disabled={false}
                      />
                      <Button
                        handleClick={handleModalCancel}
                        variant="primary"
                        size="sm"
                        text="Cancel"
                        disabled={false}
                      />
                    </div>
                  </ModalWrapper>
                )}
              </div>
            </div>
          )}
          // TODO: language support
          text="Offline Map Tiles"
          tooltip={<MoreInfoButton tip={SettingsContent.refreshDataToolTip[lang]} />}
        />
        <Section>
          <SettingsRowButton path="/settings/about" text={SettingsContent.aboutContact[lang]} />
        </Section>
        <Section>
          <SettingsRowButton path="/eula" text={SettingsContent.license[lang]} />
        </Section>
        <Section>
          <SettingsRowButton path="/settings/changelog" text={SettingsContent.changeLog[lang]} />
        </Section>
      </ContentContainer>
    </SettingsContainer>
  );
}
