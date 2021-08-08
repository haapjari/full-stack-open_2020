import React , { useState } from 'react';
import ReactDOM from 'react-dom';

/**
 * @author haapjari (www.github.com/haapjari)
 * @version 17.8.2020
 * This is a assignment React Application of Full-Stack Open (www.fullstackopen.fi)
 */

// Components START

/**
 * Feedback Button
 * @param {*} props 
 */
const Button = (props) => {
  
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )  
}

/**
 * Logic for Button
 * @param {*} props 
 */
const StatisticLine = (props) => {

  if (props.text === "headline") {
    return (
      <div>
        <h1>statistics</h1>
      </div>
    )
  }

  if (props.text === "feedback") {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }

  if (props.text === "positive") {

    return (
      <div>
          {props.text} {props.value}
      </div> 
    )
  }

  return (
    <div>
        {props.text} {props.value}
    </div>
  )
}

/**
 * Exercise: 1.8
 * Component that handles Statistics
 * @param {*} good Feedbacks as "good"
 * @param {*} neutral Feedbacks as "neutral"
 * @param {*} bad Feedbacks as "bad"
 */
const Statistics = (props) => {

  const totalGood = props.good * 1
  const totalBad = props.bad * (-1)
  const totalFeedback = props.good + props.neutral + props.bad 

  /**
   * Function calculates Feedback Average
   * @param {*} good equals +1
   * @param {*} neutral equals 0
   * @param {*} bad equals -1
   */
  const calcAvg = () => {
    const totalSum = (totalGood + totalBad) / totalFeedback
    
    return totalSum
  }

  /**
   * This Function Calculates Positive % of all Feedback
   * @param {*} good Feedbacks as "good"
   * @param {*} neutral Feedbacks as "neutral"
   * @param {*} bad Feedbacks as "bad"
   */
  const calcPositive = () => {

    const positivePercentage = totalGood / totalFeedback
    return positivePercentage * 100
  }
  /**
   * 
        
        <StatisticLine text="bad" value={props.bad}/>
        <StatisticLine text="all" value={props.good + props.neutral + props.bad}/>
        <StatisticLine text="average" value={calcAvg(props.good, props.neutral, props.bad)}/>
        <StatisticLine text="positive" value={calcPositive(props.good, props.neutral, props.bad)}/>
   */

  if (totalFeedback !== 0) {
    return (
      <table>
        <tbody>
          <tr>
            <td><StatisticLine text="headline" /></td>
          </tr>
          <tr>
            <td><StatisticLine text="good" /></td>
            <td><StatisticLine value={props.good} /></td>
          </tr>
          <tr>
            <td><StatisticLine text="neutral" /></td>
            <td><StatisticLine value={props.neutral} /></td>
          </tr>
          <tr>
            <td><StatisticLine text="bad" /></td>
            <td><StatisticLine value={props.bad} /></td>
          </tr>
          <tr>
            <td><StatisticLine text="all" /></td>
            <td><StatisticLine value={props.good + props.neutral + props.bad} /></td>
          </tr>
          <tr>
            <td><StatisticLine text="average" /></td>
            <td><StatisticLine value={calcAvg(props.good, props.neutral, props.bad)} /></td>
          </tr>
          <tr>
            <td><StatisticLine text="positive" /></td>
            <td><StatisticLine value={calcPositive(props.good, props.neutral, props.bad) + " %"} /></td>
          </tr>
        </tbody>
      </table>
    )
  }

  return (
    <table>
      <tbody>
        <tr>
          <td><StatisticLine text="headline" /></td>
        </tr>
        <tr>
          <td><StatisticLine text="feedback" /></td>
        </tr>
      </tbody>
    </table>

  )
  
}

// Components END

/**
 * App Component
 * @param {*} props 
 */
const App = (props) => {

  // Variables and Functions START

  /**
   * State
   */
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = (newGood) => {
    setGood(newGood)
  }

  const setToNeutral = (newNeutral) => {
    setNeutral(newNeutral)
  }

  const setToBad = (newBad) => {
    setBad(newBad)
  }

  const handleClick = () => {
    console.log('clicked the button')
  }

  // Variables and Functions END

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setToGood(good + 1)} text="good"/>
      <Button handleClick={() => setToNeutral(neutral + 1)} text="neutral"/>
      <Button handleClick={() => setToBad(bad + 1)} text="bad"/>
      
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);