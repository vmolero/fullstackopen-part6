import React from 'react'
import { connect } from 'react-redux'
import { useField } from '../hooks'
import { newAnecdoteAction } from '../actions/anecdoteAction'
import { showMessageAction, hideMessageAction } from '../actions/messageAction'

const AnecdoteForm = ({
  showMessageAction,
  hideMessageAction,
  newAnecdoteAction
}) => {
  const anecdoteInput = useField('text')

  const onSubmit = async evt => {
    evt.preventDefault()
    const content = anecdoteInput.value
    try {
      await newAnecdoteAction({ content, votes: 0 })
      anecdoteInput.onReset()
      showMessageAction({
        text: `New anecdote '${content}'`,
        timeoutId: setTimeout(() => {
          hideMessageAction()
        }, 5000)
      })
    } catch (err) {
      showMessageAction({
        text: `Failed to create anecdote '${content}'`,
        timeoutId: setTimeout(() => {
          hideMessageAction()
        }, 5000)
      })
    }
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
  hideMessageAction,
  newAnecdoteAction
}
const ConnectedAnecdoteForm = connect(null, mapDispatchToProps)(AnecdoteForm)
export default ConnectedAnecdoteForm
