import { render, fireEvent } from '@testing-library/react'
import React from 'react'
import DashBoard from './components/Dashboard'


test('Strike button is present', () => {
  const { getByText } = render(<DashBoard />)
  const strike = getByText("Strike")
  expect(strike).toBeDefined()
}) 

test('Ball button is present', () => {
  const { getByText } = render(<DashBoard />)
  const ball = getByText("Ball")
  expect(ball).toBeDefined()
})

test('Foul button is present', () => {
  const { getByText } = render(<DashBoard />)
  const foul = getByText("Foul")
  expect(foul).toBeDefined()
})

test('Hit button is present', () => {
  const { getByText } = render(<DashBoard />)
  const hit = getByText("Foul")
  expect(hit).toBeDefined()
})


