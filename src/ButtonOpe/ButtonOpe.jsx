import React from 'react'
import propTypes from 'prop-types'

const ButtonOpe = ({ operator, setCarry, setInput }) => {
  const onClick = () => {
    const display = document.getElementById('display')
    const c = parseInt(display.value, 10)
    setCarry((old) => {
      switch (old.operator) {
        case '+':
          display.value = old.value + c
          return { value: old.value + c, operator }
        case '*':
          display.value = old.value * c
          return { value: old.value * c, operator }
        case '-':
          display.value = old.value - c
          return { value: old.value - c, operator }
        case '%':
          display.value = old.value % c
          return { value: old.value % c, operator }
        default:
          display.value = old.value
          return { value: old.value, operator }
      }
    })
    setInput('')
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
