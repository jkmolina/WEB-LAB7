import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Calculator from './Calculator'

describe('General App Tests', () => {
  test('Renders correctly', () => {
    render(<Calculator />)
  })

  test('Adds correctly', () => {
    render(<Calculator />)

    const button1 = screen.getByText('1')
    const buttonPlus = screen.getByText('+')
    const buttonEq = screen.getByText('=')

    const input = document.getElementById('display')

    userEvent.click(button1)
    userEvent.click(buttonPlus)
    userEvent.click(buttonEq)

    expect(input.value).toBe('2')
  })
})
