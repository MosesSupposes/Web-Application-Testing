import React, { useState } from 'react'
import './App.css'
import Display from './components/Display'
import Dashboard from './components/Dashboard'

export default function App() {
  const [display, setDisplay] = useState({
    strikes: 0,
    balls: 0
  })

  const strike = () => {
    if (display.strikes >= 3) {
      setDisplay({...display, strikes: 0})
    } else {
      setDisplay({...display, strikes: display.strikes + 1})
    }
  }
  
  return (
    <div className="App">
      <Display strikes={display.strikes} balls={display.balls} />
      <Dashboard strike={strike} />
    </div>
  )
}


