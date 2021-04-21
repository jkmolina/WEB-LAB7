import React from 'react'
import ButtonNum from '../ButtonNum'

const Calculator = () => {
  const numeros = [[7, 8, 9], [4, 5, 6], [1, 2, 3]].map((set) => (
    <div>{set.map((numero) => <ButtonNum num={numero} />)}</div>
  ))
  return (
    <div>
      <input type="text" id="display" />
      <div>{numeros}</div>
    </div>
  )
}

export default Calculator
