import PropTypes from 'prop-types'
import React from "react"


const Result = ({ value }) => (
  <div className="result">
    <span>{value}</span>
  </div>

)

Result.propTypes = {
  value: PropTypes.string.isRequired
}

Result.defaultProps = {
  value: "0"
}

export default Result