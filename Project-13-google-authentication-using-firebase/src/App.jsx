import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import React from 'react'
import Header from './Header/Header'
import Banner from './Banner/Banner'
import Categories from './Categories/Categories'
import Items from './Items/Items'
import Offer from './Offer/Offer'
import Servies from './Servies/Servies'
import Oraganic from './Oraganic/Oraganic'
import Propuler from './Propuler/Propuler'
import Team from './Team/Team'
import News from './News/News'
import Footer from './Footer/Footer'


const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Categories />
      <Items />
      <Offer/>
      <Servies/>
      <Oraganic/>
      <Propuler/>
      <Team/>
      <News/> 
      <Footer/>
     
    </div>
  )
}

export default App;
