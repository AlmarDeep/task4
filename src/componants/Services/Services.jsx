import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import './Services.css'
import ServicesCard from '../ServicesCard/ServicesCard'

const Services = () => {
  const servicedata = [{
    sicon: "fas fa-heartbeat",
    stitle: "Nesciunt Meta",
    sparagaph: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, ipsam consequatur."
  },
  {
    sicon: "fas fa-thermometer",
    stitle: "Eosle Commodi",
    sparagaph: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, ipsam consequatur."
  },
  {
    sicon: "fas fa-notes-medical",
    stitle: "Ledo Markt",
    sparagaph: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, ipsam consequatur."
  },
  {
    sicon: "fas fa-dna",
    stitle: "Asperiores Commodit",
    sparagaph: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, ipsam consequatur."
  },
  {
    sicon: "fas fa-wheelchair",
    stitle: "Velit Doloregue",
    sparagaph: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, ipsam consequatur."
  },
  {
    sicon: "fas fa-pills",
    stitle: "Dolori Architecto",
    sparagaph: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, ipsam consequatur."
  },
  ]
  return (
    <div className='Services mt-5'>
      <SectionTitle title='Services' paragaph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, ipsam consequatur." />
      <div className='scards'>
        {
          servicedata.map((element, index) => {
            return (
              <ServicesCard key={index} sicon={element.sicon} stitle={element.stitle} sparagaph={element.sparagaph} />
            )
          })
        }
      </div>


    </div>
  )
}

export default Services