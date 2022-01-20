import React from "react"
import PropTypes from "prop-types"

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HelloWorld from './HelloWorld'

import configureStore from "../configureStore"
import { Provider } from "react-redux"

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={'Home!'} />
            <Route path='/hello' element={<HelloWorld greeting='Friend'/>} />
          </Routes>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App
