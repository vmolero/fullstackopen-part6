import React from 'react'
import { useField } from '../hooks'
import { newAnecdoteAction } from '../actions/anecdoteAction'
import { showMessageAction, hideMessageAction } from '../actions/messageAction'

const AnecdoteForm = ({ showMessageAction, hideMessageAction }) => {
  const anecdoteInput = useField('text')
  const onSubmit = evt => {
    evt.preventDefault()
    const content = anecdoteInput.value
    anecdoteInput.onReset()
    newAnecdoteAction({ content })
    showMessageAction({
      text: `New anecdote '${content}'`,
      timeoutId: setTimeout(() => {
        hideMessageAction()
      }, 5000)
    })
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

const mapDispatchToProps = {
  showMessageAction,
  hideMessageAction
}
const ConnectedAnecdoteForm = connect(null, mapDispatchToProps)(AnecdoteForm)
export default ConnectedAnecdoteForm
