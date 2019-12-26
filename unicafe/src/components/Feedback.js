import React from 'react'
import Button from './Button'

const Feedback = ({ handleGood, handleNeutral, handleBad }) => {
  return (
    <>
      <h1>Give feedback</h1>
      <Button onClick={handleGood} text="good" />
      <Button onClick={handleNeutral} text="neutral" />
      <Button onClick={handleBad} text="bad" />
    </>
  )
}

export default Feedback
