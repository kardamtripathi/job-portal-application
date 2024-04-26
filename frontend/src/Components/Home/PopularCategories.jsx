import React from 'react'
import { FaReact } from 'react-icons/fa'
import { GiArtificialIntelligence } from 'react-icons/gi'
import { MdAccountBalance, MdOutlineAnimation, MdOutlineDesignServices, MdOutlineWebhook } from 'react-icons/md'
import { TbAppsFilled } from 'react-icons/tb'
import { IoGameController } from 'react-icons/io5'

const PopularCategories = () => {
  const categories = [
    {
      id: 1,
      title: "Graphics & Design",
      subTitle: "100 Open Positions",
      icon: <MdOutlineDesignServices/>
    },
    {
      id: 2,
      title: "Web Development",
      subTitle: "109 Open Positions",
      icon: <TbAppsFilled/>
    },
    {
      id: 3,
      title: "React Native Developer",
      subTitle: "90 Open Positions",
      icon: <MdOutlineWebhook/>
    },
    {
      id: 4,
      title: "Accounts Manager",
      subTitle: "89 Open Positions",
      icon: <MdAccountBalance/>
    },
    {
      id: 5,
      title: "AI Engineer",
      subTitle: "101 Open Positions",
      icon: <GiArtificialIntelligence/>
    },
    {
      id: 6,
      title: "Video Animation",
      subTitle: "99 Open Positions",
      icon: <MdOutlineAnimation/>
    },
    {
      id: 7,
      title: "React Native Developer",
      subTitle: "90 Open Positions",
      icon: <FaReact/>
    },
    {
      id: 8,
      title: "Game Developer",
      subTitle: "98 Open Positions",
      icon: <IoGameController/>
    }
  ]
  return (
    <div className='categories'>
      <h3>Popular Categories</h3>
      <div className="banner">
        {
          categories.map((element) => {
            return (
              <div className="card" key={element.id}>
                <div className="icon">{element.icon}</div>
                <div className="text">
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

export default PopularCategories