import React from 'react'
import './card.css'

const Card = props => {
  const { myColor } = props
  return <div className={`card ${myColor || ''}`}>{props.children}</div>
}

export default Card
