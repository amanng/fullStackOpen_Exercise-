import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

const Header = (props) => {
  console.log(props)
  return <h1>{props.course}</h1>
}

const Content=(props)=>{
  return(
    <div>
<p>
  {props.part} {props.exercises}
  </p>  
  </div>
  )
}
const Total=(props)=>{
  return(
<p>Number of exercises {props.sumOfExercise}</p>
)}
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
const sumOfExercise=part1.exercises+part2.exercises+part3.exercises
  return (
 
   <div>
     <Content course={course}/>
 <Content part={part1.name} exercises={part1.exercises}/>
 <Content part={part2.name} exercises={part2.exercises}/>
 <Content part={part3.name} exercises={part3.exercises}/>

 <Total sumOfExercise ={sumOfExercise}/>
    </div>
  )
}

export default App