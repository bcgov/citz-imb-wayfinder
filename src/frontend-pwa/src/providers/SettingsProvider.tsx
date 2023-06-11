/**
 * @summary context provider for app settings
 * @author Dallas Richmond
 */
import React, { createContext, ReactNode } from 'react';
import BaseProvider from './BaseProvider';
import { initialState, reducer } from '../services/settings/settingsReducer';

export const SettingsContext = createContext(initialState);

type SettingsProviderProps = {
  children: ReactNode;
}

export default function SettingsProvider({ children }: SettingsProviderProps) {
  return (
    <BaseProvider Context={SettingsContext} initialState={initialState} reducer={reducer}>
      {children}
    </BaseProvider>
  );
}
