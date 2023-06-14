/**
 * @summary context provider for settings data
 * @author Dallas Richmond
 */
import { createContext, ReactNode } from 'react';
import BaseProvider from './BaseProvider';
import { initialState, reducer } from '../services/app/AppReducer';

export const SettingsContext = createContext(initialState);

type AppProviderProps = {
  children: ReactNode;
}

function AppProvider({ children }: AppProviderProps) {
  return (
    <BaseProvider Context={SettingsContext} initialState={initialState} reducer={reducer}>
      {children}
    </BaseProvider>
  );
}

export default AppProvider;
