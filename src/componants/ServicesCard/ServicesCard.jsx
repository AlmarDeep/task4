import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import './ServicesCard.css'

const ServicesCard = ({ sicon, stitle, sparagaph }) => {
  return (
    <div className='iconswithtext mt-5 pl-5'  >
      <div className='sicon'><i class={sicon}></i></div>
      <SectionTitle title={stitle} paragaph={sparagaph} />
    </div>
  )
}

export default ServicesCard