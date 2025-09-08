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
  let sum = 0
  for (let i = 0; i < parts.length; i++) {
    sum += parts[i].exercises
  }
  return (
    <p><strong>total of {sum} exercises</strong></p>
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
