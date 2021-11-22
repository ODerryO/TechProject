import React from "react";
import './detail.css'
import { useParams } from "react-router";
import { getDetail } from "./detailAction";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'



function Detail (props) {
  let {id}  = useParams()
  let detail = props.DetailReducer.DetailGame
  let Platforms = props.DetailReducer.Platforms
  let developers = props.DetailReducer.Developer
  let publisher = props.DetailReducer.Publisher
  let genre = props.DetailReducer.Genre

  console.log(props.DetailReducer.Platforms,'ini detail Platform')
  console.log(props.DetailReducer.Genre,'ini detail Genre')
  console.log(props.DetailReducer.Developer,'ini Developer')
  console.log(props.DetailReducer.Publisher,'ini Publisher')
  console.log(props,'ini game detail')
  console.log(props,'ini props')
  React.useEffect(() => {
    props.getDetail(id)
  }, [])

  return (
    <div>
      <div className="wrapperDetail">
        <div className="gameDescription">
          <img className="thumbnailDetail" src={detail.background_image} />
          <p> About {detail.name} </p>
            {detail.description_raw?.split(/(\r\n|\r|\n)/gi).map((paragraph) => (
              <p style={{ margin: "20px 100px", fontSize: "15px" }}>
                {paragraph}
              </p>
            ))}
        </div>
        <div className="aboutGame">
        <h3>Additional Information</h3>
          <ul className="info_list">
            <li>
              <span className="text-muted">Title :</span>
              <p>{detail.name}</p>
            </li>
            <li>
              <span className="text-muted">Developer :</span>
              <p className="wkwkw">
                {developers?.map((e) => `${e.name}`)}
              </p>
            </li>
            <li>
              <span className="text-muted">Publisher :</span>
              <p className="wkwkw">
                {publisher?.map((e) => `${e.name}`)}
              </p>
            </li>
            <li>
              <span className="text-muted">Release Date :</span>
              <p>{detail.released}</p>
            </li>
            <li>
              <span className="text-muted">Genre :</span>
              {/* {props.DetailReducer.Genre.map((genre) => (
                <p> {genre.name} </p>
              ))} */}
              <p> {genre?.map((e) => `${e.name} || `)} </p>
            </li>
            <li>
              <span className="text-muted">Platforms : </span>
              <p className="wkwkw">
                {Platforms?.map((e) => `${e.platform.name} || `)}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

const MapStateToProps = (store) => {
  return ({
    DetailReducer: store.DetailReducer
  })
}

const MapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getDetail: getDetail
  }, dispatch)
}

export default connect(MapStateToProps, MapDispatchToProps)(Detail)