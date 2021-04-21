import React from 'react'
import ButtonNum from '../ButtonNum'
import ButtonOpe from '../ButtonOpe'

const Calculator = () => {
  const [, setCarry] = React.useState({ value: 0, operator: '+' })
  const [, setInput] = React.useState('')

  const numeros = [[7, 8, 9], [4, 5, 6], [1, 2, 3], [0]].map((set) => (
    <div>{set.map((numero) => <ButtonNum num={numero} setInput={setInput} />)}</div>
  ))

  const operators = ['+', '-', '*', '%', '='].map((operator) => (
    <ButtonOpe operator={operator} setCarry={setCarry} setInput={setInput} />
  ))

  return (
    <div>
      <input type="text" id="display" defaultValue="0" />
      <div>{numeros}</div>
      <div>{operators}</div>
    </div>
  )
}

export default Calculator
