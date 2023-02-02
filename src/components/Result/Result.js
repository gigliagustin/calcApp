import React from "react"

const Result = (props) => {
  debugger
  console.log("Renderización de Result", props.value)
  return (
    <div className="result">
      <span>{props.value}</span>
    </div>
  )
}

export default Result