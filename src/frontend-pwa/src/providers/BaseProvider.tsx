/**
 * @summary A base context provider to avoid repeating code.
 * @param   Context The context of the given piece of state,
 *          this is what gets returned from React.useContext
 * @param   reducer The reducer for the piece of state.
 * @param   initialState The initial values for the piece of state.
 * @param   children The child component of this component
 * @author  Zach Bourque & Brady Mitchell & Dallas Richmond
 */
import React, {
  Context as ContextType, ReactNode, useReducer, useMemo, useEffect,
} from 'react';

import AppActionType from '../services/app/AppActions';

const { RESTORE_STATE } = AppActionType;

type BaseProviderProps<ContextObjType, StateType, ChildCompsType> = {
  Context: ContextType<ContextObjType>;
  reducer: (state: StateType, action: any) => StateType;
  initialState: StateType;
  children: ChildCompsType;
}

export default function BaseProvider<
  ContextObjType extends Record<string, any>,
  StateType extends Record<string, any>,
  ChildCompsType extends ReactNode,
>(
  props: BaseProviderProps<ContextObjType, StateType, ChildCompsType>,
) {
  const {
    Context, reducer, initialState, children,
  } = props;

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const storedState = localStorage.getItem('appState');
    if (storedState) {
      dispatch({ type: RESTORE_STATE, payload: JSON.parse(storedState) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('appState', JSON.stringify(state));
  }, [state]);

  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);
  return (
    <Context.Provider value={contextValue as unknown as ContextObjType}>
      {children}
    </Context.Provider>
  );
}
