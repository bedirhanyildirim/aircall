import { combineReducers } from "redux";
import { ActionTypes } from "./constants";

const initialState = {
  calls: [],
  selectedCall: {},
  archivedCalls: []
}

const callReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ActionTypes.SET_CALLS:
      return { ...state, calls: payload};
    case ActionTypes.ARCHIVE_ALL:
      return { ...state, calls: [], archivedCalls: state.archivedCalls.concat(payload)}
    default:
      return state;
  }
}

const reducers = combineReducers({
    allCalls: callReducer
})

export default reducers;