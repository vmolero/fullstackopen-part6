import React from 'react'
import Anecdote from './Anecdote'
import { voteAnecdoteAction } from '../actions/anecdoteAction'
import { showMessageAction, hideMessageAction } from '../actions/messageAction'

const AnecdoteList = ({ store }) => {
  const { anecdotes, filter } = store.getState()

  const anecdotesToShow = () => {
    if (filter.length === 0) {
      return anecdotes
    }
    return anecdotes.filter(anecdote => {
      return anecdote.content.toLowerCase().indexOf(filter.toLowerCase()) > -1
    })
  }
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
      {anecdotesToShow().map(anecdote => (
        <Anecdote
          key={anecdote.id}
          {...anecdote}
          voteHandler={vote(anecdote.id)}
        />
      ))}
    </>
  )
}

export default AnecdoteList
