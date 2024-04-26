import React, { useContext } from 'react'
import {Context} from '../../main'
import {Navigate} from 'react-router-dom'
import HeroSection from './HeroSection'
import PopularCategories from './PopularCategories'
import HowItWorks from './HowItWorks'
import PopularCompanies from './PopularCompanies'
const Home = () => {
  const {isAuthorized} = useContext(Context);
  if(!isAuthorized){
    return <Navigate to={"/login"} />
  }
  return (
    <section className='homepage page'>
      <HeroSection/>
      <HowItWorks/>
      <PopularCategories/>
      <PopularCompanies/>
    </section>
  )
}

export default Home