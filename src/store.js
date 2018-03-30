import { combineReducers } from "redux";
import account from "account/reducers";
import activity from "activity/reducers";
import exchange from "exchange/reducers";

const rootReducer = combineReducers({
  account,
  activity,
  exchange
});

export default rootReducer;
