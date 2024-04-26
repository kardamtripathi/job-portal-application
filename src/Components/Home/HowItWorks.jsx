import React from 'react'
import { FaUserPlus } from 'react-icons/fa'
import { MdFindInPage } from 'react-icons/md'
import {IoMdSend} from 'react-icons/io'
const HowItWorks = () => {
  return (
    <div className='howitworks'>
      <div className="container">
        <h3>How We Work</h3>
        <div className="banner">
          <div className="card">
            <FaUserPlus/>
            <p>Create an Account</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore nihil ea sunt quam nisi eum temporibus accusamus quo consequuntur quae doloremque, voluptates error assumenda rem consectetur fugit reprehenderit, blanditiis impedit?</p>
          </div>
          <div className="card">
            <MdFindInPage/>
            <p>Search a Job or Post a Job</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore nihil ea sunt quam nisi eum temporibus accusamus quo consequuntur quae doloremque, voluptates error assumenda rem consectetur fugit reprehenderit, blanditiis impedit?</p>
          </div>
          <div className="card">
            <IoMdSend/>
            <p>Apply for Job or Recruit Suitable Candidate</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore nihil ea sunt quam nisi eum temporibus accusamus quo consequuntur quae doloremque, voluptates error assumenda rem consectetur fugit reprehenderit, blanditiis impedit?</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks