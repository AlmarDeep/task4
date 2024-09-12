import React from 'react'
import './FeatureCard.css'

const FeatureCard = ({ i, title, text }) => {
  return (
    <div className='featurecard mb-3'>
      <div className='ficon'><i class={i} ></i></div>
      <div className='parargh'>
        <h5>{title}</h5>
        <p> {text}</p>
      </div>
    </div>
  )
}

export default FeatureCard