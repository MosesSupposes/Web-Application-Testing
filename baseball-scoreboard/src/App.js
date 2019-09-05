import React, { useState } from 'react'
import './App.css'
import Display from './components/Display'

export default function App() {
  return (
    <div className="App">
      <Display strikes={0} balls={0} />
    </div>
  )
}


