import React from 'react'
import ReactDOM from 'react-dom'

//1.5: Change the course and its parts into a single JavaScript object and refactor

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

  
  // Renders a single part using props
  const Part = (props) =>  {
    console.log(props)
      return (
        <>
          <p>{props.parts} {props.exercises} </p>
        </>
      )
 }

  const Header = (props) =>  {
    console.log(props)
      return (
       <>
       <h1>{props.course}</h1>
       </>
     )
   }
   
   // Renders content using data passed as props 
  const Content = (props) => {
  console.log(props)
    return (
      <>
        <Part parts = {props.parts[0].name} exercises = {props.parts[0].exercises} /> 
        <Part parts = {props.parts[1].name} exercises = {props.parts[1].exercises} /> 
        <Part parts = {props.parts[2].name} exercises = {props.parts[2].exercises} /> 
      </>
    )
  }
  
  const Total = (props) => {
    console.log(props)
      return (
        <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
      )
  }

  

ReactDOM.render(<App />, document.getElementById('root'))