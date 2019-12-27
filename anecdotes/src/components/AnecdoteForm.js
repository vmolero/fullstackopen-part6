import React from 'react'
import { useField } from '../hooks'
import { newAnecdoteAction } from '../actions/anecdoteAction'

const AnecdoteForm = ({ store }) => {
  const anecdoteInput = useField('text')
  const onSubmit = evt => {
    evt.preventDefault()
    const content = anecdoteInput.value
    anecdoteInput.onReset()
    return store.dispatch(newAnecdoteAction({ content }))
  }

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={onSubmit}>
        <div>
          <input name="anecdote" {...anecdoteInput} />
        </div>
        <button type="submit">create</button>
      </form>
    </>
  )
}

export default AnecdoteForm
