const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    'Fundamentals of React',
    'Using props to pass data',
    'State of a component'
  ]
  const exercises = [
    10,
    7,
    14
  ]

  const Header = (props) => {
    return (
      <div>
        <h1>{props.course}</h1>
      </div>
    )
  }

  const Part = (props) => {
    return (
      <p>{props.parts}{" "}{props.exercises}</p>
    )
  }

  const Content = () => {
    return (
      <div>
        <Part parts={parts[0]} exercises={exercises[0]} />
        <Part parts={parts[1]} exercises={exercises[1]} />
        <Part parts={parts[2]} exercises={exercises[2]} />
      </div>
    )
  }
  
  const Total = (props) => {
    return (
      <div>
        <p>Number of exercises {props.exercises[0] + props.exercises[1] + props.exercises[2]}</p>
      </div>
    )
  }

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total exercises={exercises} />
    </div>
  )
}

export default App