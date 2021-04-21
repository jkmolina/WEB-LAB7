import React from 'react'
import propTypes from 'prop-types'

const ButtonOpe = ({ operator, setCarry, setInput }) => {
  const onClick = () => {
    const display = document.getElementById('display')
    const c = parseInt(display.value, 10)
    setCarry((old) => {
      let resultado = 0
      switch (old.operator) {
        case '+':
          resultado = old.value + c
          break
        case '*':
          resultado = old.value * c
          break
        case '-':
          resultado = old.value - c
          break
        case '%':
          resultado = old.value % c
          break
        default:
          resultado = old.value
          break
      }
      if (resultado <= 999999999 && resultado >= 0) {
        display.value = resultado
        setInput('')
        return { value: resultado, operator }
      }
      display.value = 'ERROR'
      setInput('-1')
      return -1
    })
  }

  return (
    <button type="button" onClick={onClick}>{operator}</button>
  )
}

ButtonOpe.propTypes = {
  operator: propTypes.string.isRequired,
  setCarry: propTypes.func.isRequired,
  setInput: propTypes.func.isRequired,
}

export default ButtonOpe
