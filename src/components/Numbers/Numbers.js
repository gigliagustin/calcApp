import PropTypes from 'prop-types'
import React from 'react'
import Button from '../Button'


const numbers = [1,2,3,4,5,6,7,8,9,0]

const renderButtons = onClickNumber => {
  const renderButton = number => (
    <Button 
      key={number}
      text={number.toString()}
      clickHandler={onClickNumber}
    />
  )
  return numbers.map(renderButton)
}

const Numbers = ({ onClickNumber }) => {
  return (
    <section className="numbers">
      {renderButtons(onClickNumber)}
    </section>
  )
}

Numbers.propTypes = {
  onClickNumber: PropTypes.func.isRequired
}

export default Numbers