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

export default Courses