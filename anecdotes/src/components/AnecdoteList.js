import React from 'react'
import Anecdote from './Anecdote'
import { voteAnecdoteAction } from '../actions/anecdoteAction'
import { showMessageAction, hideMessageAction } from '../actions/messageAction'

const AnecdoteList = ({ store }) => {
  const anecdotes = store.getState().anecdotes

  const vote = id => () => {
    store.dispatch(voteAnecdoteAction({ id }))
    const votedAnecdote = anecdotes.find(anecdote => anecdote.id === id)
    store.dispatch(
      showMessageAction({
        text: `You voted '${votedAnecdote.content}'`,
        timeoutId: setTimeout(() => {
          store.dispatch(hideMessageAction())
        }, 5000)
      })
    )
  }

  return (
    <>
      <h2>Anecdote list</h2>
      {anecdotes.map(anecdote => (
        <Anecdote {...anecdote} voteHandler={vote(anecdote.id)} />
      ))}
    </>
  )
}

export default AnecdoteList
