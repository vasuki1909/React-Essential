import React from 'react'

const CoreConcepts = (props) => {
  console.log(props)
  return (
    <li>
    <img src={props.img} alt={props.title} ></img>
    <h3>{props.title}</h3>
    <p>{props.description}</p>
    </li>
  )
}

export default CoreConcepts