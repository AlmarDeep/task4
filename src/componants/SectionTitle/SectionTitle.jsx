import React from 'react'
import './SectionTitle.css'

const SectionTitle = ({ title, paragaph }) => {
  return (
    <div className='sectiontitle '>
      <h5 >{title}</h5>
      <div style={{ borderBottom: "#3fbbc0 solid 7px", width: "100px" }}></div>
      <p className='text-center'>{paragaph}</p>
    </div>
  )
}

export default SectionTitle