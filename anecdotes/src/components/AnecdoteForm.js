import React from 'react'
import { useField } from '../hooks'
import { newAnecdoteAction } from '../actions/anecdoteAction'
import { showMessageAction, hideMessageAction } from '../actions/messageAction'

const AnecdoteForm = ({ store }) => {
  const anecdoteInput = useField('text')
  const onSubmit = evt => {
    evt.preventDefault()
    const content = anecdoteInput.value
    anecdoteInput.onReset()
    store.dispatch(newAnecdoteAction({ content }))
    store.dispatch(
      showMessageAction({
        text: `New anecdote '${content}'`,
        timeoutId: setTimeout(() => {
          store.dispatch(hideMessageAction())
        }, 5000)
      })
    )
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
