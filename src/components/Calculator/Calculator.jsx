/* eslint-disable react/no-array-index-key */
import React from 'react'

import ButtonNum from '../ButtonNum'
import ButtonOpe from '../ButtonOpe'

import './Calculator.css'

const Calculator = () => {
  const [, setCarry] = React.useState({ value: 0, operator: '+' })
  const [, setInput] = React.useState('')

  const numeros = [[7, 8, 9], [4, 5, 6], [1, 2, 3], [0]].map((set, index) => (
    <div key={`row${index}`} className="numrow">
      {set.map((numero, i) => <ButtonNum key={`num${i}}`} num={numero} setInput={setInput} />)}
    </div>
  ))

  const operators = ['+', '-', '*', '%', '='].map((operator, index) => (
    <ButtonOpe key={`ope${index}`} operator={operator} setCarry={setCarry} setInput={setInput} />
  ))

  return (
    <div className="calculator">
      <input type="text" id="display" defaultValue="0" />
      <div className="numpad">
        <div className="numeros">{numeros}</div>
        <div className="operadores">{operators}</div>
      </div>
    </div>
  )
}

export default Calculator
