import React, { useState } from 'react'
import ReactDOM from 'react-dom'

/**
 * @author haapjari (www.github.com/haapjari)
 * @version 18.8.2020
 * This is a assignment React Application of Full-Stack Open (www.fullstackopen.fi)
 */

/**
 * Feedback Button
 * @param {*} props 
 */
const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )  
}

/**
 * Anecdote Component
 * @param {*} props 
 */
const Anecdote = (props) => {

  return (
    <table>
      <tbody>
        <tr>
          <td>{props.value} {props.text}</td>
        </tr>
      </tbody>
    </table>
  )
}

/**
 * Function that Calculates Index with Most Votes
 * @param {} props 
 */
const calcMostVotes = (props) => {
    
  let biggestIndex = 0

  for (let i = 0; i < props.length; i++) {
    if (props[i] > props[biggestIndex]) {
      biggestIndex = i
    }
  }

  return (
    biggestIndex
  )
}

/**
 * Main Application
 * @param {} props 
 */
const App = (props) => {

  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(new Array(6 + 1).join('0').split('').map(parseFloat))
  const [winner, setWinner] = useState(0)

  const randomNumber = () => {
    return (
      Math.floor(Math.random() * 6)
    )
  }

  /**
   * Handler for Vote
   */
  const handleVoteClick = () => {
    const copy = [...vote]
    copy[selected] += 1
    setVote(copy)
    setWinner(calcMostVotes(copy))
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote value={props.vote} text={props.anecdotes[selected]}/>
      <table>
        <tbody>
          <tr>
            <td>has {vote[selected]} votes</td>
          </tr>
          <tr>
            <td><Button handleClick={() => handleVoteClick()} text="vote"/></td>
            <td><Button handleClick={() => setSelected(randomNumber())} text="next anecdote"/></td>
          </tr>
        </tbody>
      </table>
      <h1>Anecdote with the most votes</h1>
      <Anecdote text={props.anecdotes[winner]}/>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)