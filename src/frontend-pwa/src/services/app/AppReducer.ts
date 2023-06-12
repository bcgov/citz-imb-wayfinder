import AppActionType from './AppActions';

const { SET_APP_DATA, SET_LOADING } = AppActionType;

export type AppAction = {
  type: AppActionType;
  payload?: object;
}

// Initial settings state.
export const initialState = {
  isLoading: true,
  appData: {},
};

/**
 * Handles users actions and returns the updated users state.
 * @param {object} state - The current users state.
 * @param {AppAction} action - The users action to be handled.
 * @returns {object} - The updated users state.
 */
export const reducer = (state: object, action: AppAction): object => {
  switch (action.type) {
    case SET_APP_DATA:
      return { ...state, appData: action.payload };
    case SET_LOADING:
      return { ...state, isLoading: action.payload };
    default:
      throw new Error();
  }
};
