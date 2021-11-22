import * as types from "./detailActionTypes"

const initalStore = {
  text: "",
  loading: false,
  error: "",
  DetailGame: [],
  Genre: [],
  Platformss: [],
  Developer: [],
  Publisher: []
}

function DetailReducer(store = initalStore, action){
  switch(action.type){
    case types.GET_DETAIL_REQUEST:
      return {...store, loading: true}
    case types.GET_DETAIL_FAILURE:
      return {...store, loading: false, error: action.error}
    case types.GET_DETAIL_SUCCESS:
      return {...store, loading: false, DetailGame: action.DetailGame}
    case types.GET_DETAIL_SUCCESS_GENRE:
      return {...store, loading: false, Genre: action.Genre}
    case types.GET_DETAIL_SUCCESS_PLATFORMS:
      return {...store, loading: false, Platforms: action.Platforms} 
    case types.GET_DETAIL_SUCCESS_DEVELOPERS:
      return {...store, loading: false, Developer: action.Developer}
    case types.GET_DETAIL_SUCCESS_PUBLISHER:
      return {...store, loading: false, Publisher: action.Publisher }
    default:
      return store
  }
}

export default DetailReducer