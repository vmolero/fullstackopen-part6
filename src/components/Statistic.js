import React from 'react'

const Statistic = ({ label, text }) => {
  return (
    <tr>
      <td>{label}</td>
      <td>{text}</td>
    </tr>
  )
}

export default Statistic
