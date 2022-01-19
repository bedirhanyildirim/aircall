import { ActionTypes } from "./constants";

export const setCalls = (calls) => {
  return {
      type: ActionTypes.SET_CALLS,
      payload: calls
  }
}

export const selectedCall = (call) => {
  return {
      type: ActionTypes.SELECTED_CALL,
      payload: call
  }
}