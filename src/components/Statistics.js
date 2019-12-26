import React from 'react'
import Statistic from './Statistic'

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad
  const header = <h2>Statistics</h2>
  if (all === 0) {
    return (
      <>
        {header}
        <div>No feedback given</div>
      </>
    )
  }
  const average = (good, neutral, bad) => {
    const all = good + neutral + bad
    if (all === 0) {
      return 0
    }
    return (good - bad) / all
  }
  const positive = (good, neutral, bad) => {
    const all = good + neutral + bad
    if (all === 0) {
      return 0
    }
    return (good / all) * 100
  }

  return (
    <>
      {header}
      <table>
        <tbody>
          <Statistic label="Good" text={good} />
          <Statistic label="Neutral" text={neutral} />
          <Statistic label="Bad" text={bad} />
          <Statistic label="All" text={all} />
          <Statistic label="Average" text={average(good, neutral, bad)} />
          <Statistic
            label="Positive"
            text={positive(good, neutral, bad) + '%'}
          />
        </tbody>
      </table>
    </>
  )
}

export default Statistics
