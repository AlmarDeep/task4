

import './App.css'
import AboutUs from './componants/AboutUs/AboutUs'
import AddAnAppointment from './componants/AddAnAppointment/AddAnAppointment'
import CardList from './componants/CardList/CardList'
import CardsSection from './componants/CardsSection/CardsSection'
import Contact from './componants/Contact/Contact'
import Department from './componants/Department/Department'
import Doctors from './componants/Doctors/Doctors'
import EmergencySection from './componants/EmergencySection/EmergencySection'
import Feature from './componants/Feature/Feature'
import Footer from './componants/Footer/Footer'
import Hero from './componants/Hero/Hero'
import NavBar from './componants/NavBar/NavBar'
import Pricing from './componants/Pricing/Pricing'
import Questions from './componants/Questions/Questions'
import Services from './componants/Services/Services'



function App() {


  return (
    <>
    
       <NavBar logo='/assets/img/logo.png' />
       <Hero />
      <CardsSection />
      <EmergencySection />
      <AboutUs />
      <Feature />
      <Services />
      <AddAnAppointment/>
      <Department />
      <CardList />
      <Doctors />
      <Pricing />
      <Questions />
      <Contact />
      <Footer />
  
     
      
    </>
  )
}

export default App
