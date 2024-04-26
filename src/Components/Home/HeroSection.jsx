import React from 'react'
import HeroImg from '../../assets/heroImg.png'
import { FaBuilding, FaSuitcase, FaUserPlus, FaUsers } from 'react-icons/fa'
const HeroSection = () => {
  const details = [
    {
      id: 1,
      title: "Exclusive Live Jobs",
      icon: <FaSuitcase/>
    },
    {
      id: 2,
      title: "Various Employers",
      icon: <FaUserPlus/>
    },
    {
      id: 3,
      title: "Many Job Seekers",
      icon: <FaUsers/>
    },
    {
      id: 4,
      title: "Streamline Process",
      icon: <FaUserPlus/>
    }
  ]
  return (
    <div className='heroSection'>
      <div className="container">
        <div className="title">
          <h1>Welcome to Quick Job</h1>
          <p>Whether you're a seasoned professional seeking your next challenge or a fresh graduate eager to embark on your professional journey, our platform is designed to connect you with the perfect job match. With an extensive database of diverse industries and positions, we offer tailored solutions to match your skills, experience, and aspirations. Say goodbye to endless job searches and let us streamline your path to success.</p>
        </div>
        <div className="image">
          <img src={HeroImg} alt='heroImage' />
        </div>
      </div>
      <div className="details">{
        details.map(element => {
          return(
            <div className="card" key={element.id}>
              <div className="icon">{element.icon}</div>
              <div className="content">
                <p>{element.title}</p>
                <p>{element.subTitle}</p>
              </div>
            </div>
          )
        })
        }
      </div>
    </div>
  )
}

export default HeroSection