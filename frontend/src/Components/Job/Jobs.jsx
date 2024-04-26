import React, { useContext, useEffect, useState } from 'react'
import {useNavigate, Link} from 'react-router-dom'
import {Context} from '../../main';
import axios from 'axios'
import { BACKEND_URL } from '../../BackendUrl';
const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const {isAuthorized} = useContext(Context);
  const navigate = useNavigate();
  useEffect(() => {
    try{
      axios.get(`${BACKEND_URL}/api/job/getJobs`, {withCredentials: true})
      .then((res) => {
        setJobs(res.data)
      })
    }
    catch(error){
      console.log(error)
    }
  }, []);
  useEffect(() => {
    if(!isAuthorized){
      navigate("/login")
    }
  }, [isAuthorized])
  return (
    <section className='jobs page'>
      <div className="container">
        <h1>Available Jobs</h1>
        <div className="banner">
          {jobs.jobs && jobs.jobs.map((element) => {
            return (
              <div className="card" key={element._id}>
                <p>{element.title}</p>
                <p>{element.category}</p>
                <p>{element.country}</p>
                <Link to={`/job/${element._id}`}>More</Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Jobs
