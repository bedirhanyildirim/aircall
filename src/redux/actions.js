import { ActionTypes } from "./constants";

export const setCalls = (calls) => {
  return {
      type: ActionTypes.SET_CALLS,
      payload: calls
  }
}

export const archiveAllCalls = (calls) => {
    return {
        type: ActionTypes.ARCHIVE_ALL,
        payload: calls
    }
}

export const archiveCall = (call) => {
    return {
        type: ActionTypes.ARCHIVE_CALL,
        payload: call
    }
}

export const setCall = (call) => {
  return {
      type: ActionTypes.SELECT_CALL,
      payload: call
  }
}