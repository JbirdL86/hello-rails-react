import React from "react"
import PropTypes from "prop-types"

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Greeting from "./Greeting"

import configureStore from "../configureStore"
import { Provider } from "react-redux"

import Home from '../pages/Home'

const store = configureStore();

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/hello' element={<Greeting />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App
