import { combineReducers } from "redux";
import bucketListReducer from "./bucketListReducer";

export default combineReducers({
  bucket_lists: bucketListReducer,
});
