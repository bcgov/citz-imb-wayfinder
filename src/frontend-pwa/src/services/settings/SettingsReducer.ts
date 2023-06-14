import SettingsActionType from './SettingsActions';

const { SET_EULA } = SettingsActionType;

export type SettingsAction = {
  type: SettingsActionType;
  payload?: object;
}

// Initial settings state.
export const initialState = {
  eulaAccepted: false,
};

/**
 * Handles settings actions and returns the updated settings state.
 * @param {object} state - The current settings state.
 * @param {SeetingsAction} action - The settings action to be handled.
 * @returns {object} - The updated settings state.
 */
export const reducer = (state: object, action: SettingsAction): object => {
  switch (action.type) {
    case SET_EULA:
      return { ...state, eulaAccepted: action.payload };
    default:
      throw new Error();
  }
};
