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
const Statistics=(props)=>{
return(
  <div>
    <h2>statistics</h2>
<p>good {props.good}</p>
<p>neutral {props.neutral}</p>
<p>bad {props.bad}</p>
<p>All {props.good+props.neutral+props.bad}</p>
<p>Average {(props.good-props.bad)/(props.good+props.bad+props.neutral)}</p>
<p>Positive {((props.good)/(props.good+props.bad+props.neutral))*100}%</p>
  </div>
)
}
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
