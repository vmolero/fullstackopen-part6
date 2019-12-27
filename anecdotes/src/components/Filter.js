import React from 'react'
import { applyFilterAction, cancelFilterAction } from '../actions/filterAction'

const Filter = ({ store }) => {
  const handleChange = event => {
    const filter = event.target.value
    if (filter.length === 0) {
      return store.dispatch(cancelFilterAction())
    }
    return store.dispatch(applyFilterAction({ filter }))
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

export default Filter
