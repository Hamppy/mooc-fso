import { useState } from 'react'

function init(x) {
  // to intialize average & percentage with a zero (0) instead of NaN
  if (isNaN(x)) {
    return 0;
  }
  return x;
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
      <p>
        good {props.good}<br />
        neutral {props.neutral}<br />
        bad {props.bad}<br />
        all {props.all}<br />
        average {init(props.average)}<br />
        percentage {init(props.percentage)} %
      </p>
    </div>
  )
}

const App = () => {
  // save clicks of the buttons to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const average = (good - bad) / (good + bad + neutral)
  const percentage = good / (good + bad + neutral) * 100

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good +1) & setAll(all + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1) & setAll(all + 1)}>neutral</button>    
      <button onClick={() => setBad(bad + 1) & setAll(all + 1)}>bad</button>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} percentage={percentage} />
    </div>
  )
}

export default App