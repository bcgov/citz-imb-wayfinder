/* eslint-disable no-shadow */
enum SettingsActionType {
  GET_SETTINGS = 'GET_SETTINGS',
}

const { GET_SETTINGS } = SettingsActionType;

export type SettingsAction = {
  type: SettingsActionType;
  payload?: object;
}

// Initial settings state.
export const initialState = {};

/**
 * Handles users actions and returns the updated users state.
 * @param {object} state - The current users state.
 * @param {SettingsAction} action - The users action to be handled.
 * @returns {object} - The updated users state.
 */
export const reducer = (state: object, action: SettingsAction): object => {
  switch (action.type) {
    case GET_SETTINGS:
      return { ...state, ...action.payload };
    default:
      throw new Error();
  }
};
