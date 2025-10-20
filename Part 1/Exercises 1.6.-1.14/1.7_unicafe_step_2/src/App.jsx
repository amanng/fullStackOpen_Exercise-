import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Login.css'
const APP = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
 
  

  const handleGoodClick = () => {
    setGood(good + 1)

   
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
     
 
  }

  const handleBadClick = () => {
    setBad(bad + 1)
    
   
  }

  return (
  <div>
<h1>give feedback</h1>
<button onClick={handleGoodClick}>good</button>
<button onClick={handleNeutralClick}>neutral</button>
<button onClick={handleBadClick}>bad</button>

<h1>statistics</h1>
<p>good {good}</p>
<p>neutral {neutral}</p>
<p>bad {bad}</p>
<p>All {good+neutral+bad}</p>
<p>Average {(good-bad)/(good+bad+neutral)}</p>
<p>Positive {((good)/(good+bad+neutral))*100}%</p>

  </div>
  )
}
export default APP
