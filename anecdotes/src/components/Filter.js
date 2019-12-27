import React from 'react'
import { applyFilterAction, cancelFilterAction } from '../actions/filterAction'

const Filter = ({ applyFilterAction, cancelFilterAction }) => {
  const handleChange = event => {
    const filter = event.target.value
    if (filter.length === 0) {
      cancelFilterAction()
    }
    return applyFilterAction({ filter })
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

const mapDispatchToProps = {
  applyFilterAction,
  cancelFilterAction
}
const ConnectedFilter = connect(null, mapDispatchToProps)(Filter)
export default ConnectedFilter
