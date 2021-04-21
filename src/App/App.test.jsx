import React from 'react'
import { render } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'

import App from './App'

describe('General App Tests', () => {
  test('Renders correctly', () => {
    render(<App />)
  })
  /*
  test('Renders Hello.', () => {
    render(<App />)

    const el = screen.getByText('Hello world')
    expect(el).toBeInTheDocument()
  })
  */
})
