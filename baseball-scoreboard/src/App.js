import React, { useState } from 'react'
import './App.css'
import Display from './components/Display'
import Dashboard from './components/Dashboard'

export default function App() {
  const [display, setDisplay] = useState({
    strikes: 0,
    balls: 0,
  })
  const [outs, setOuts] = useState(0)

  const reset = () => {
    setDisplay({
      strikes: 0,
      balls: 0
    })
  }

  const strike = () => {
    if (display.strikes >= 3) {
      reset()
      out()
    } else {
      setDisplay({...display, strikes: display.strikes + 1})
    }
  }

  const ball = () => {
    if (display.balls >= 4) {
      reset()
      out()
    } else {
      setDisplay({...display, balls: display.balls + 1})
    }
  }

  const foul = () => {
    if (display.strikes === 2) {
      setDisplay({...display, strikes: 2})
    } else {
      strike()
    }
  }

  const out = () => {
    if (outs < 3) {
      setOuts(outs + 1)
    } else {
      setOuts(0)
    }
  }
  
  return (
    <div className="App">
      <Display strikes={display.strikes} balls={display.balls} outs={outs} />
      <Dashboard 
        strike={strike} 
        ball={ball}
        foul={foul}
        hit={reset} 
      />
    </div>
  )
}


