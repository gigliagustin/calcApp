import PropTypes from 'prop-types'
import React from "react"

const Button = ({ type, text, clickHandler }) => {
  const handleOnClick = () => {
    clickHandler(text)
  }
  
  return (
    <button className={type} onClick={handleOnClick}>
      <span>{text}</span>
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.string, 
  text: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired
}
export default Button