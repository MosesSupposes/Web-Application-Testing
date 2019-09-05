import React, { useState } from 'react'
import './App.css'
import Display from './components/Display'
import Dashboard from './components/Dashboard'

export default function App() {
  const [display, setDisplay] = useState({
    strikes: 0,
    balls: 0
  })

  const reset = () => {
    setDisplay({
      strikes: 0,
      balls: 0
    })
  }

  const strike = () => {
    if (display.strikes >= 3) {
      reset()
    } else {
      setDisplay({...display, strikes: display.strikes + 1})
    }
  }

  const ball = () => {
    if (display.balls >= 4) {
      reset()
    } else {
      setDisplay({...display, balls: display.balls + 1})
    }
  }
  
  return (
    <div className="App">
      <Display strikes={display.strikes} balls={display.balls} />
      <Dashboard 
        strike={strike} 
        ball={ball}
        reset={reset} 
      />
    </div>
  )
}


