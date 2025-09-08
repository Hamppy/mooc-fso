import { useState } from 'react'

function init(x) {
  // to intialize average & percentage with a zero (0) instead of NaN
  if (isNaN(x)) {
    return 0;
  }
  return x;
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
      <h2>statistics</h2>
      <p>
        good {good}<br />
        neutral {neutral}<br />
        bad {bad}<br />
        all {all}<br />
        average {init(average)}<br />
        percentage {init(percentage)} %
      </p>
    </div>
  )
}

export default App