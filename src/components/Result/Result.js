import React from "react"

const Result = ({value}) => {
  console.log("Renderización de Result", value)
  return (
    <div className="result">
      <span>{value}</span>
    </div>
  )
}

export default Result