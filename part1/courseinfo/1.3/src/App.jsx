const App = () => {
  const course = 'Half Stack application development'
  const part1 = { 
    name: 'Fundamentals of React', 
    exercises: 10 
  }
  const part2 = { 
    name: 'Using props to pass data', 
    exercises: 7 
  }
  const part3 = { 
    name: 'State of a component', 
    exercises: 14 
  }

  const Header = (props) => {
    console.log(props)
    return (
      <div>
        <h1>{props.course}</h1>
      </div>
    )
  }

  const Parts = (
      <div>
        <p>{part1.name} {part1.exercises}</p>
        <p>{part2.name} {part2.exercises}</p>
        <p>{part3.name} {part3.exercises}</p>
      </div>
    )

  const Content = () => {
    return Parts
  }

  const Sum = (part1.exercises + part2.exercises + part3.exercises)

  const Total = () => { 
    return (
      <div>
        <p>Number of exercises {Sum}</p>
      </div>
    )
  }

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total />
    </div>
  )
}

export default App