const type = {
  APPLY: 'APPLY',
  CANCEL: 'CANCEL'
}

const applyFilterAction = ({ filter }) => {
  return {
    type: type.APPLY,
    filter
  }
}

const cancelFilterAction = () => {
  return {
    type: type.CANCEL
  }
}

export default type
export { applyFilterAction, cancelFilterAction }
