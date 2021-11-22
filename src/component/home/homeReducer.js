import * as types from './homeActionType'

const initalStore = {
  text: "",
  page: null,
  loading: false,
  error: "",
  HomeGame: []
}

function HomeReducer(store = initalStore, action){
  switch(action.type){
    case types.CHANGE_DISPLAY_INPUT:
      return {...store, text: action.text}
    case types.GET_HOME_REQUEST:
      return {...store, loading: true}
    case types.GET_HOME_FAILURE:
      return {...store, loading: false, error: action.error}
    case types.GET_HOME_SUCCESS:
      return {...store, loading: false, HomeGame: action.HomeGame}
    default:
      return store
  }
}

export default HomeReducer