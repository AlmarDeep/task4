import Button from 'react-bootstrap/Button';
import React from 'react'
import './EmergencySection.css'

const EmergencySection = () => {
  return (
    <div className='EmergencySection mt-3 p-5 text-center'>
      <h3 > IN AN EMERGENCY? NEED HELP NOW?</h3>
      <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quod vero libero esse ut, tempora numquam odio nam porro! Sequi, aperiam adipisci. Ullam numquam quibusdam labore amet vero dicta deserunt?</p>
      <Button style={{ background: "#3fbbc0", border: "#ffffff solid 3px" }} >MAKE AN APPOINTMENT</Button>
    </div>
  )
}

export default EmergencySection