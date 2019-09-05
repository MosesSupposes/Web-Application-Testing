import React, { useState } from 'react'
import './App.css'
import Display from './components/Display'
import Dashboard from './components/Dashboard'

export default function App() {
  return (
    <div className="App">
      <Display strikes={0} balls={0} />
      <Dashboard />
    </div>
  )
}


