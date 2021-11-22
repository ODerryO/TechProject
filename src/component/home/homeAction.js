import axios from 'axios'
import * as types from './homeActionType'

export function getHome(page){
  return dispatch => {

    dispatch({type: types.GET_HOME_REQUEST})

    axios({
      method: "GET",
      url: `/games?key=189440bd7150476f8a68ecdb698b473e&page=${page}`
    }).then(response => {
      let result = response.data.results
      dispatch({type: types.GET_HOME_SUCCESS, HomeGame: result})
    }).catch(err => {
      dispatch({type: types.GET_HOME_FAILURE, error: err})
    })
  }
}