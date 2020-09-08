import React from 'react'
import ReactDOM from 'react-dom'

//Exercise 1.4 application refactored to use object array

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

  
  // Renders a single part using props
  const Part = (props) =>  {
    console.log(props)
      return (
        <>
<<<<<<< HEAD
          <p>{props.parts} {props.exercises} </p>
=======
          <p>{props.name} {props.exercise} </p>
>>>>>>> 314515c72b3732300b8d4b2a9dcad74a8cf51749
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
<<<<<<< HEAD
   
=======

>>>>>>> 314515c72b3732300b8d4b2a9dcad74a8cf51749
   // Renders content using data passed as props 
  const Content = (props) => {
  console.log(props)
    return (
<<<<<<< HEAD
      <>
        <Part parts = {props.parts[0].name} exercises = {props.parts[0].exercises} /> 
        <Part parts = {props.parts[1].name} exercises = {props.parts[1].exercises} /> 
        <Part parts = {props.parts[2].name} exercises = {props.parts[2].exercises} /> 
      </>
=======
      <div>
        <Part name = {part1} exercise = {exercises1} /> 
        <Part name = {part2} exercise = {exercises2} />
        <Part name = {part3} exercise = {exercises3} />
      </div>
>>>>>>> 314515c72b3732300b8d4b2a9dcad74a8cf51749
    )
  }
  
  const Total = (props) => {
    console.log(props)
      return (
<<<<<<< HEAD
        <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
      )
  }

  
=======
        <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
      )
  }

  return (
    <>
      <Header course={course} />
      <Content part1 = {part1} part2 = {part2} part3 ={part3} exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} /> 
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
    </>
  )
}
>>>>>>> 314515c72b3732300b8d4b2a9dcad74a8cf51749

ReactDOM.render(<App />, document.getElementById('root'))