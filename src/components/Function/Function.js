import PropTypes from 'prop-types'
import React from 'react'
import Button from '../Button'

const Function = ({ onContentClear, onDelete }) => {
  return (
    <div className="functions">
      <Button type={'button-long-text'} text='Clear' clickHandler={onContentClear} />
      <Button text='&larr;' clickHandler={onDelete} />
    </div>
  )
}

Function.propTypes = {
  onContentClear: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}
export default Function