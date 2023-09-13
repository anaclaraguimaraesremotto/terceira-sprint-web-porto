
import React from 'react';
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'

function App() {

  return (
    <body className='body'>
      <Header/>
      <Outlet/>
    </body>
  )
}

export default App