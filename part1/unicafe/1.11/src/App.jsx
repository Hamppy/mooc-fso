import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}

const StatisticLine = (props) => {
  return (
    <table>
      <tbody>
        <tr>
         <td style={{width: "72px"}}>{props.text}</td><td>{props.value}</td>
        </tr>
      </tbody>
    </table>
  )
}

const Statistics = (props) => {

  if (props.all === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <h2>statistics</h2>
      <StatisticLine text="good" value={props.good} />
      <StatisticLine text="neutral" value={props.neutral} />
      <StatisticLine text="bad" value={props.bad} />
      <StatisticLine text="all" value={props.all} />
      <StatisticLine text="average" value={props.average} />
      <StatisticLine text="percentage" value={props.percentage}/>
    </div>
  )
}

const App = () => {
  // save clicks of the buttons to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad
  const average = (good - bad) / all
  const percentage = good / all * 100

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good +1)} text="good" />
      <Button onClick={() => setNeutral(neutral +1)} text="neutral" />
      <Button onClick={() => setBad(bad +1)} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} percentage={percentage} />
    </div>
  )
}

export default App