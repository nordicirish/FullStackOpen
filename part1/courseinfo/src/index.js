import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  
  // Renders a single part using props
  const Part = (props) =>  {
  console.log(props)
   return (
    <>
      <p>{props.name} {props.exercise} </p>
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
    <div>
      <Part name = {part1} exercise = {exercises1} /> 
      <Part name = {part2} exercise = {exercises2} />
      <Part name = {part3} exercise = {exercises3} />
    </div>
  )
  }
  
  const Total = (props) => {
    console.log(props)
    return (
     
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


ReactDOM.render(<App />, document.getElementById('root'))