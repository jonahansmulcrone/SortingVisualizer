import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Visualizer from './components/Visualizer/Visualizer'
import Options from './components/Options/Options'

function App() {

  return (
    <div className='app-container'>
      <Header />
      <div className='content-container'>
        <Options />
        <Visualizer />
      </div>

    </div>
  )
}

export default App
