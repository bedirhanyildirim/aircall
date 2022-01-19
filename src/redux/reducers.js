import { combineReducers } from "redux";
import {ActionTypes} from "./constants";

const initialState = {
  calls: [{
    "id": 7834,
    "created_at": "2018-04-19T09:38:41.000Z",
    "direction": "outbound",
    "from": "Pierre-Baptiste Béchu",
    "to": "06 46 62 12 33",
    "via": "NYC Office",
    "duration": "120",
    "is_archived": false,
    "call_type": "missed"
  }]
}

const callReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ActionTypes.SET_CALLS:
      return state;
    default:
      return state;
  }
}

const reducers = combineReducers({
    allCalls: callReducer
})

export default reducers;