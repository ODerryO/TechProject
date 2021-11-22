import { combineReducers } from "redux";
import HomeReducer from "../component/home/homeReducer";
import DetailReducer from "../component/detail/detailReducer";
import { applyMiddleware } from "redux";
import { compose } from "redux";
import thunkMiddleware from "redux-thunk";


const enhancer = compose(
  applyMiddleware(thunkMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const rootReducer = combineReducers({
  HomeReducer : HomeReducer,
  DetailReducer : DetailReducer
});

export default rootReducer;