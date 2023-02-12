import React from "react"

const Button = ({ type, text, clickHandler }) => {
  const handleOnClick = () => {
    console.log("onClick en el Button")
    clickHandler(text)
  }
  
  return (
    <button className={type} onClick={handleOnClick}>
      <span>{text}</span>
    </button>
  )
}

export default Button