import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage2 from '../page/Home';
import HomePage from '../component/home/home';
import DetailPage from '../component/detail/detail'

function Rute() {
    return (
        <Router>
          <Routes>
              <Route exact path="/" element={<HomePage2/>} />
              <Route path="/game/:id" element={<DetailPage/>} />
          </Routes>
        </Router>
    )
}
export default Rute;



