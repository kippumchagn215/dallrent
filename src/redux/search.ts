import { Action, AnyAction } from "redux";
import { RootState } from "./store";

// ACTION TYPES
const SET_OPTION = "search/setOption";
const SET_IS_LOADING = "search/setIsLoading";
export interface IGuestInfo {
  location: string;
  dateStart: string;
  contractType: string;
  guests: number;
}
interface ISetOptionAction extends Action<typeof SET_OPTION> {
  payload: IGuestInfo;
}
interface ISetIsLoadingAction extends Action<typeof SET_IS_LOADING> {
  payload: boolean;
}

// ACTIONS
export const setOptionAction = ({
  location,
  dateStart: datestart,
  contractType: contracttype,
  guests,
}: IGuestInfo) => {
  return {
    type: SET_OPTION,
    payload: {
      location,
      datestart,
      contracttype,
      guests,
    },
  };
};

export const setIsLoadingAction = (isLoading: boolean) => ({
  type: SET_IS_LOADING,
  payload: isLoading,
});

// INITIAL STATE
interface ISearchSliceState {
  location: string;
  dateStart: string;
  contractType: string;
  guests: number;
  isLoading: boolean;
  dateEnd: string;
}

const initialState: ISearchSliceState = {
  location: "",
  dateStart: "",
  contractType: "",
  guests: 0,
  isLoading: false,
  dateEnd: "",
};

// REDUCERS
const searchReducer = (
  state: ISearchSliceState = initialState,
  action: AnyAction
) => {
  const { payload } = action;

  switch (action.type) {
    case SET_OPTION:
      return {
        ...state,
        location: payload.location,
        dateStart: payload.dateStart,
        guests: payload.guests,
      };

    case SET_IS_LOADING: {
      return {
        ...state,
        isLoading: payload,
      };
    }

    default:
      return { ...state };
  }
};

export default searchReducer;

// SELECTORS
// https://github.com/reduxjs/reselect
export const selectOptionState = (rootState: RootState) => rootState.search;
export const selectSearchIsLoading = (rootState: RootState) => selectOptionState(rootState).isLoading;
