const Course = ({ course }) => {
  console.log(course.name)
  console.log(course.parts)
  return (
    <div>
      <h1>{course.name}</h1>
      <li>
        {course.parts.map(part => (
          <Part key={part.id} name={part.name} exercises={part.exercises} />
        ))}
      </li>
      <li>
        <Total parts={course.parts}/>
      </li>
    </div>
  )
}

const Part = ({ name, exercises }) => (
  <p>
    {name} {exercises}
  </p>
)

const Total = ({ parts = [] }) => {
  const total = parts.reduce((acc, part) =>
    acc + part.exercises, 0)
    return (
      <p><strong>total of {total} exercises</strong></p>
    )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
    ]
  }
  return <Course course={course} />
}

export default App
