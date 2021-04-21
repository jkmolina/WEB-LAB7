import React from 'react'
import propTypes from 'prop-types'

const ButtonNum = ({ num, setInput }) => {
  const onClick = () => {
    const display = document.getElementById('display')
    if (display.value.length < 9) {
      setInput((old) => {
        if (old >= 0) {
          const newVal = old + num
          display.value = newVal
          return newVal
        }
        return old
      })
    }
  }

  return (
    <button type="button" onClick={onClick}>{num}</button>
  )
}

ButtonNum.propTypes = ({
  num: propTypes.number.isRequired,
  setInput: propTypes.func.isRequired,
})

export default ButtonNum
