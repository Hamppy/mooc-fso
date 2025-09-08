const Courses = ({ courses = [] }) => {
  console.log(courses[0].name)
  console.log(courses[0].parts)
  return (
    courses.map(course => (
      <div key={course.id}>
        <Course name={course.name} />
      <li>
        {course.parts.map(part => (
          <Part key={part.id} name={part.name} exercises={part.exercises}/>
        ))}
      </li>
      <li>
        <Total parts={course.parts} />
      </li>
    </div>
    ))
  )
}

const Course = ({ name }) => (
  <h2>
    {name}
  </h2>
)

const Part = ({ name, exercises }) => (
  <p>
    {name} {exercises}
  </p>
)

const Total = ({ parts = [] }) => {
  const total = parts.reduce((acc, part) => acc + part.exercises, 0)
  return (
    <p><strong>total of {total} exercises</strong></p>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <h1>Web development curriculum</h1>
      <Courses courses={courses} />
    </div>
  )
}

export default App
