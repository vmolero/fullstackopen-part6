import React from 'react'
import { useField } from '../hooks'

const AnecdoteForm = ({ newHandler }) => {
  const anecdoteInput = useField('text')
  const onSubmit = evt => {
    evt.preventDefault()
    const content = anecdoteInput.value
    anecdoteInput.onReset()
    return newHandler({
      content
    })
  }
  return (
    <form onSubmit={onSubmit}>
      <div>
        <input name="anecdote" {...anecdoteInput} />
      </div>
      <button type="submit">create</button>
    </form>
  )
}

export default AnecdoteForm
