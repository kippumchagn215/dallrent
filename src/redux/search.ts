import React from "react";
import { Action } from "redux";
import { RootState } from "./store";

export interface guestInfo {
  location: string;
  datestart: string;
  contracttype: string;
  guests: number;
}

const setOption = "search/setOption";
interface setOptionAction extends Action<typeof setOption> {
  payload: {
    location: string;
    datestart: string;
    contracttype: string;
    guests: number;
  };
}
export const selectOptionState = (rootState: RootState) => rootState.search;
export const setoption = ({
  location,
  datestart,
  contracttype,
  guests,
}: guestInfo) => {
  return {
    type: setOption,
    payload: {
      location,
      datestart,
      contracttype,
      guests,
    },
  };
};
const initialstate = {
  location: "",
  datestart: "",
  contracttype: "",
  guests: 0,
};

const searchReducer = (
  state: guestInfo = initialstate,
  action: setOptionAction
) => {
  const payload = action.payload;
  switch (action.type) {
    case setOption:
      return {
        ...state,
        location: payload.location,
        datestart: payload.datestart,
        guests: payload.guests,
      };
    default:
      return { ...state };
  }
};
export default searchReducer;
