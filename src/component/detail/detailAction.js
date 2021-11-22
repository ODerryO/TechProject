import axios from 'axios'
import * as types from './detailActionTypes'

export function getDetail(id){
  return dispatch => {

    dispatch({type: types.GET_DETAIL_REQUEST})

    axios({
      method: "GET",
      url: `https://api.rawg.io/api/games/${id}?key=189440bd7150476f8a68ecdb698b473e`
    }).then(response => {
      let result2 = response.data
      let genre = response.data.genres
      let platform = response.data.platforms
      let Developer = response.data.developers
      let Publisher = response.data.publishers
      dispatch({type: types.GET_DETAIL_SUCCESS, DetailGame: result2})
      dispatch({type: types.GET_DETAIL_SUCCESS_GENRE, Genre: genre})
      dispatch({type: types.GET_DETAIL_SUCCESS_PLATFORMS, Platforms: platform})
      dispatch({type: types.GET_DETAIL_SUCCESS_DEVELOPERS, Developer: Developer})
      dispatch({type: types.GET_DETAIL_SUCCESS_PUBLISHER, Publisher:Publisher})
    }).catch(err => {
      dispatch({type: types.GET_DETAIL_FAILURE, error: err})
    })
  }
}