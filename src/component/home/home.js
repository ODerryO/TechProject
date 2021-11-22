import React from 'react'
import { getHome } from './homeAction';
import "./home.css";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
const currentYear = new Date().getFullYear();

function HomePage (props) {

  const [pages, setPages] = useState(1);

  const handleChange = (event, value) => {
    // e.preventDefault();
    console.log(value, "ini value")
    setPages(value)
  }


  console.log(props,'ini pro')
  console.log()

  React.useEffect(() => {
    props.getHome(pages)
  }, [pages])

  return (
    <div className="wrapperHome">
      <div className="text-center">
          <h1 className="title">
            Best for PC and Browser in {currentYear}!
          </h1>
      </div>
      <div className="displayCard">
      
        {props.HomeReducer.HomeGame.map ((game, id) => (
          <div className="card" key={game.id} >
            <Link to={`/game/${game.slug}`}>
              <div className="cardGame">
                <img className="thumbnail" src={game.background_image} alt="gambar" />
              </div>

              <div className="cardBody">
                <p className="gameTittle">{game.name}</p>
                <p className="gameGenre">Genre : {game.genres[0].name} </p>
                <p className="gameRating">Rating : {game.rating}</p>
              </div>
            </Link>
          </div>
        ))}
        <div>
          <Stack spacing={2}>
            <Pagination count={10}
              onChange={handleChange}
            />
          </Stack>
        </div>
      </div>
    </div>
  )
}

const MapStateToProps = (store) => {
  return ({
    HomeReducer: store.HomeReducer
  })
}

const MapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getHome: getHome
  }, dispatch)
}

export default connect(MapStateToProps, MapDispatchToProps)(HomePage)