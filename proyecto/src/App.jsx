import { useState } from 'react'
import './App.css'
import DavidMartinez from './DavidMartinez'
import NetflixFooter from './footerNetflix'
import MatiasRamirez from './MatiasRamirez'
import Tendencias from './AndresSoler'

function App() {
  return (
    <>
      <Tendencias />
      <DavidMartinez />
      <NetflixFooter/>
      <MatiasRamirez />
    </>
  )
}

export default App
