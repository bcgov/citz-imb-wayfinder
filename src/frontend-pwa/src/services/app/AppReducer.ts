import AppActionType from './AppActions';

const {
  SET_APP_DATA,
  SET_LOADING,
  SET_CURRENT_LOCATION,
  SET_EULA,
  SET_SETTINGS,
} = AppActionType;

export type AppAction = {
  type: AppActionType;
  payload?: object;
}

// Initial settings state.
export const initialState = {
  isLoading: true,
  appData: {},
  currentLocation: {},
  eulaState: false,
  settings: {},
};

/**
 * @summary Handles app actions and returns the updated app state.
 * @param {object} state - The current app state.
 * @param {AppAction} action - The app action to be handled.
 * @returns {object} - The updated app state.
 * @author Dallas Richmond
 */
export const reducer = (state: object, action: AppAction): object => {
  switch (action.type) {
    case SET_APP_DATA:
      return { ...state, appData: action.payload };
    case SET_LOADING:
      return { ...state, isLoading: action.payload };
    case SET_CURRENT_LOCATION:
      return { ...state, currentLocation: action.payload };
    case SET_EULA:
      return { ...state, eulaAccepted: action.payload };
    case SET_SETTINGS:
      return { ...state, settings: action.payload };
    default:
      throw new Error();
  }
};
