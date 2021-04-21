import React from 'react'
import propTypes from 'prop-types'

const ButtonNum = ({ num }) => {
  const onClick = () => {
    const display = document.getElementById('display')
    if (display.value.length < 9) display.value += num
  }

  return (
    <button type="button" onClick={onClick}>{num}</button>
  )
}

ButtonNum.propTypes = ({
  num: propTypes.number.isRequired,
})

export default ButtonNum
