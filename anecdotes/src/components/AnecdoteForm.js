import React from 'react'
import { connect } from 'react-redux'
import { useField } from '../hooks'
import { newAnecdoteAction } from '../actions/anecdoteAction'
import { showMessageAction } from '../actions/messageAction'

const AnecdoteForm = ({ showMessageAction, newAnecdoteAction }) => {
  const anecdoteInput = useField('text')

  const onSubmit = async evt => {
    evt.preventDefault()
    const content = anecdoteInput.value
    try {
      await newAnecdoteAction({ content, votes: 0 })
      anecdoteInput.onReset()
      showMessageAction({
        text: `New anecdote '${content}'`,
        seconds: 5
      })
    } catch (err) {
      showMessageAction({
        text: `Failed to create anecdote '${content}'`,
        seconds: 5
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
  newAnecdoteAction
}
const ConnectedAnecdoteForm = connect(null, mapDispatchToProps)(AnecdoteForm)
export default ConnectedAnecdoteForm
