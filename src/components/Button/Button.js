import React from "react"

const Button = ({ type, text }) => {
  return (
    <button className={type} onClick={() => {
      console.log("onClick en el Button")
    }}>
      <span>{text}</span>
    </button>
  )
}

export default Button