import React from 'react'
import Anecdote from './Anecdote'

const AnecdoteList = ({ anecdotes, voteHandler }) => {
  return anecdotes.map(anecdote => {
    return <Anecdote {...anecdote} voteHandler={voteHandler(anecdote.id)} />
  })
}

export default AnecdoteList
