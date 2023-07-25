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
    state,
  } = useAppService();
  const [locationRangeValue, setLocationRangeValue] = useState(state.settings.location_range);
  const [offlineToggleValue, setOfflineToggleValue] = useState(state.settings.offline_mode);
  const [analyticsToggleValue, setAnalyticsToggleValue] = useState(state.settings.analytics_opt_in);
  const [lang, setLang] = useState(state.settings.lang || 'eng');
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
   * @summary Pulls in new app data if user hits the refresh button.
   *          Clears the browser cache, then forces the page
   *          to unregister the service-worker and reload the
   *          window. This forces an updated service-worker
   *          to initialize and download, triggering all assets
   *          to be downloaded anew.
   *
   *
   * @author  Dallas Richmond, Tyler Maloney
   */
  // const handleRefresh = () => {
  //   setAppData(onlineCheck);
  //   if (state.settings.analytics_opt_in && geolocationKnown) {
  //     const analytics = {
  //       latitude,
  //       longitude,
  //       usage: {
  //         function: 'settings',
  //         settings: {
  //           settingType: 'refresh data',
  //         },
  //       },
  //     };
  //     sendAnalytics(analytics);
  //   }
  //   // if ('serviceWorker' in navigator) {
  //   //   const clearCachesPromise = Promise.all([
  //   //     caches.delete('mapTiles'),
  //   //     caches.delete('site'),
  //   //   ]);
  //   //   console.log(clearCachesPromise);
  //   //   clearCachesPromise.then(() => {
  //   //     navigator.serviceWorker.getRegistration().then((registration) => {
  //   //       if (registration) {
  //   //         registration.unregister().then((isUnregistered) => {
  //   //           if (isUnregistered) {
  //   //             console.log('service worker unregistered');
  //   //             window.location.reload();
  //   //           } else {
  //   //             console.error('Service worker unregistration failed.');
  //   //           }
  //   //         }).catch((error) => {
  //   //           console.error('Service worker unregistration failed:', error);
  //   //         });
  //   //       } else {
  //   //         window.location.reload();
  //   //       }
  //   //     }).catch((error) => {
  //   //       console.error('Error getting service worker registration:', error);
  //   //     });
  //   //   }).catch((error) => {
  //   //     console.error('Error clearing caches:', error);
  //   //   });
  //   // }
  //   if ('serviceWorker' in navigator) {
  //     const clearCachesPromise = caches.keys()
  //       .then((cacheNames) => {
  //         const cacheDeletionPromises = cacheNames.filter((cacheName) => cacheName.startsWith('workbox-precache-v2'))
  //           .map((cacheName) => caches.delete(cacheName));
  //         return Promise.all(cacheDeletionPromises);
  //       });

  //     console.log(clearCachesPromise);
  //     clearCachesPromise.then(() => {
  //       navigator.serviceWorker.getRegistration().then((registration) => {
  //         if (registration) {
  //           registration.unregister().then((isUnregistered) => {
  //             if (isUnregistered) {
  //               console.log('service worker unregistered');
  //               window.location.reload();
  //             } else {
  //               console.error('Service worker unregistration failed.');
  //             }
  //           }).catch((error) => {
  //             console.error('Service worker unregistration failed:', error);
  //           });
  //         } else {
  //           window.location.reload();
  //         }
  //       }).catch((error) => {
  //         console.error('Error getting service worker registration:', error);
  //       });
  //     }).catch((error) => {
  //       console.error('Error clearing caches:', error);
  //     });
  //   }

  //   // if (state.settings.analytics_opt_in && geolocationKnown) {
  //   //   const analytics = {
  //   //     latitude,
  //   //     longitude,
  //   //     usage: {
  //   //       function: 'settings',
  //   //       settings: {
  //   //         settingType: 'refresh data',
  //   //       },
  //   //     },
  //   //   };
  //   //   sendAnalytics(analytics);
  //   // }
  // };

  // const handleRefresh = () => {
  //   setAppData(onlineCheck);
  //   if (state.settings.analytics_opt_in && geolocationKnown) {
  //     const analytics = {
  //       latitude,
  //       longitude,
  //       usage: {
  //         function: 'settings',
  //         settings: {
  //           settingType: 'refresh data',
  //         },
  //       },
  //     };
  //     sendAnalytics(analytics);
  //   }

  //   if ('serviceWorker' in navigator) {
  //     const clearCachesPromise = caches.keys()
  //       .then((cacheNames) => {
  //         const cacheDeletionPromises = cacheNames.filter((cacheName) => cacheName.startsWith('workbox-precache-v2'))
  //           .map((cacheName) => caches.delete(cacheName));
  //         return Promise.all(cacheDeletionPromises);
  //       });
  //     console.log(clearCachesPromise);
  //     clearCachesPromise.then(() => {
  //       navigator.serviceWorker.getRegistration().then((registration) => {
  //         if (registration) {
  //           registration.unregister().then(() => {
  //             console.log('service worker unregistered');
  //             window.location.reload();
  //           }).catch((error) => {
  //             console.error('Service worker unregistration failed:', error);
  //           });
  //         } else {
  //           window.location.reload();
  //         }
  //       }).catch((error) => {
  //         console.error('Error getting service worker registration:', error);
  //       });
  //     }).catch((error) => {
  //       console.error('Error clearing caches:', error);
  //     });
  //   }
  // };
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

    if ('serviceWorker' in navigator) {
      const clearCachesPromise = caches.keys()
        .then((cacheNames) => {
          const cacheDeletionPromises = cacheNames.filter((cacheName) => cacheName.startsWith('workbox-precache-v2'))
            .map((cacheName) => caches.delete(cacheName));
          return Promise.all(cacheDeletionPromises);
        });

      console.log(clearCachesPromise);
      clearCachesPromise.then(() => {
        // Instead of unregistering the service worker, we will update it
        navigator.serviceWorker.register('/sw.js')
          .then(() => {
            console.log('Service worker updated successfully.');
            // window.location.reload();
          })
          .catch((error) => {
            console.error('Service worker registration failed:', error);
            // window.location.reload();
          });
      }).catch((error) => {
        console.error('Error clearing caches:', error);
      });
    }
  };

  /**
   * @summary Directs the service worker to clear all mapTile data from browser cache.
   * @author  Tyler Maloney
   */
  const handleClearCache = () => {
    if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage({ action: 'clearCache' });
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
          handleClick={handleLocationRangeAnalytics}
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
          tooltip={(
            <MoreInfoButton
              tip={SettingsContent.refreshDataToolTip[lang]}
            />
          )}
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
        <Accordion
          content={(
            <div>
              <p style={{ color: 'red' }}>
                {SettingsContent.clearCacheWarningText[lang]}
              </p>
              <Button
                handleClick={handleClearCache}
                variant="secondary"
                size="sm"
                disabled={false}
                text={SettingsContent.clearCache[lang]}
              />
            </div>
          )}
          text={SettingsContent.clearCacheAccordionTitle[lang]}
          tooltip={(
            <MoreInfoButton
              tip={SettingsContent.clearCacheToolTip[lang]}
            />
          )}
        />
      </ContentContainer>
    </SettingsContainer>
  );
}
