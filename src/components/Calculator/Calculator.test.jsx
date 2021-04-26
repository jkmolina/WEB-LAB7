import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Calculator from './Calculator'

describe('Calculator Tests', () => {
  test('Renders correctly', () => {
    render(<Calculator />)
  })

  test('Adds correctly', () => {
    render(<Calculator />)

    const button1 = screen.getByText('1')
    const buttonPlus = screen.getByText('+')
    const buttonEq = screen.getByText('=')

    const display = document.getElementById('display')

    userEvent.click(button1)
    userEvent.click(buttonPlus)
    userEvent.click(button1)
    userEvent.click(buttonEq)

    expect(display.value).toBe('2')
  })

  test('Subtracts correctly', () => {
    render(<Calculator />)

    const button5 = screen.getByText('5')
    const button2 = screen.getByText('2')
    const buttonSub = screen.getByText('-')
    const buttonEq = screen.getByText('=')

    const display = document.getElementById('display')

    userEvent.click(button5)
    userEvent.click(buttonSub)
    userEvent.click(button2)
    userEvent.click(buttonEq)

    expect(display.value).toBe('3')
  })

  test('Multiplies correctly', () => {
    render(<Calculator />)

    const button3 = screen.getByText('3')
    const buttonBy = screen.getByText('*')
    const buttonEq = screen.getByText('=')

    const display = document.getElementById('display')

    userEvent.click(button3)
    userEvent.click(buttonBy)
    userEvent.click(button3)
    userEvent.click(buttonEq)

    expect(display.value).toBe('9')
  })

  test('Uses modulo operation correctly', () => {
    render(<Calculator />)

    const button7 = screen.getByText('7')
    const button4 = screen.getByText('4')
    const buttonMod = screen.getByText('%')
    const buttonEq = screen.getByText('=')

    const display = document.getElementById('display')

    userEvent.click(button7)
    userEvent.click(buttonMod)
    userEvent.click(button4)
    userEvent.click(buttonEq)

    expect(display.value).toBe('3')
  })

  test('Displays error on operation with >9 characters', () => {
    render(<Calculator />)
    const button9 = screen.getByText('9')
    const buttonMul = screen.getByText('*')
    const button2 = screen.getByText('2')
    const buttonEq = screen.getByText('=')

    const display = document.getElementById('display')

    for (let i = 0; i < 9; i += 1) {
      userEvent.click(button9)
    }
    userEvent.click(buttonMul)
    userEvent.click(button2)
    userEvent.click(buttonEq)

    expect(display.value).toBe('ERROR')
  })
})
