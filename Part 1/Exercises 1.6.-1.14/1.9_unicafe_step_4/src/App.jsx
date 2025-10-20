import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Login.css'
const Button=()=>{
  return(
    <div>
    <h1>Give feedback</h1>
</div>
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
    <div>
      <h2>statistics</h2>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>All {total}</p>
      <p>Average {(props.good - props.bad) / total}</p>
      <p>Positive {(props.good / total) * 100}%</p>
    </div>
  );
};
const APP = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
 
  return (
  <div>
<Button/>
<button onClick={()=>setGood(good+1)}>good</button>
<button onClick={()=>setNeutral(neutral+1)}>neutral</button>
<button onClick={()=>setBad(bad+1)}>bad</button>
<Statistics good={good} neutral={neutral} bad={bad}/>

  </div>
  )
}
export default APP
