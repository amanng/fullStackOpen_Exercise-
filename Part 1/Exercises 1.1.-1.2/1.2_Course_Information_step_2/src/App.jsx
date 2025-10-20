import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
const part3 = 'State of a component'
const exercises3 = 14
const part1 = 'Fundamentals of React'
const exercises1 = 10
const part2 = 'Using props to pass data'
const exercises2 = 7
const Header=()=>{
   const course = 'Half Stack application development'
   return(
 <h1>{course}</h1>
   )
}
const Part1=()=>{

  return(
<div>
   <p>
        {part1} {exercises1}
      </p>
</div>
  )
}
const Part2=()=>{

  return(
<div>
   <p>
        {part2} {exercises2}
      </p>
</div>
  )
}
const Part3=()=>{

  return(
<div>
   <p>
        {part3} {exercises3}
      </p>
</div>
  )
}
const Content=()=>{
  return(
    <div>
<Part1 />
<Part2/>
<Part3/>
    
  </div>
  )
}
const Total=()=>{
  return(
<p>Number of exercises {exercises1+exercises2+exercises3}</p>
)}
const App = () => {


  return (
    <div>
     <Header/>
     <Content/>
     <Total/>
    </div>
  )
}

export default App