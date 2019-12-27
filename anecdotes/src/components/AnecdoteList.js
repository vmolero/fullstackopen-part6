import React from 'react'
import Anecdote from './Anecdote'
import { voteAnecdoteAction } from '../actions/anecdoteAction'

const AnecdoteList = ({ store }) => {
  const anecdotes = store.getState().anecdotes

  const vote = id => () => {
    return store.dispatch(voteAnecdoteAction({ id }))
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
