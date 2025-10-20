import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Login.css'
const Header=()=>{
return(
  <div>
   <h1>Give feedback</h1>
  </div>
)
}
const Button=(props)=>{
    return(
<button onClick={props.handleClick}>{props.text}</button>
    ) 
}
const StatisticsLine=(props)=>{
return (
  <p>
  {props.text} {props.value}
</p>
)
}
const Statistics = (props) => {
  const total = props.good + props.neutral + props.bad;
  if (total === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    );
  }
  return (
    // <div>
    //   <h2>statistics</h2>
    //   <p>good {props.good}</p>
    //   <p>neutral {props.neutral}</p>
    //   <p>bad {props.bad}</p>
    //   <p>All {total}</p>
    //   <p>Average {(props.good - props.bad) / total}</p>
    //   <p>Positive {(props.good / total) * 100}%</p>
    // </div>
    <div>
      <StatisticsLine text="Good" value={props.good}/>
      <StatisticsLine text="Neutral" value={props.neutral}/>
         <StatisticsLine text="Bad" value={props.bad}/>
         <StatisticsLine text="All" value={total}/>
          <StatisticsLine text="Average" value={(props.good - props.bad) / total}/>
           <StatisticsLine text="Positive" value={((props.good / total) * 100)+" %" } />
    </div>
   
  );
};
const APP = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
 const goodClick=()=>{
  setGood(good+1)
 }
 const neutralClick=()=>{
  setNeutral(neutral+1)
 }
 const badClick=()=>{
  setBad(bad+1)
 }

  return (
  <div>
    <Header />
<Button handleClick={goodClick} text="Good"/>
<Button handleClick={neutralClick} text="Neutral"/>
<Button handleClick={badClick} text="Bad"/>
<Statistics good={good} neutral={neutral} bad={bad}/>

  </div>
  )
}
export default APP
