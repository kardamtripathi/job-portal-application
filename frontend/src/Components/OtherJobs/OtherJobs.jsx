import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Context } from "../../main";
import { BACKEND_URL } from "../../BackendUrl";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import OtherJobDetails from "./OtherJobDetails";
import { CircularProgress } from "@mui/material";

const OtherJobs = () => {
  const [jobRole, setJobRole] = useState("");
  const [location, setLocation] = useState("");
  const [jobs, setJobs] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [modelOpen, setModelOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { isAuthorized } = useContext(Context);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.get(
        `${BACKEND_URL}/api/otherJobs/jobs?jobRole=${jobRole}&location=${location}`,
        { withCredentials: true }
      );
      setJobs(response.data.jobs);
      setShow(true);
      toast.success(response.data.message);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setShow(false);
      toast.error(error.response.data.message);
      setLoading(false);
    }
  };

  const handleButton = (element) => {
    setSelectedJob(element);
    setModelOpen(true);
  };

  const closeModel = () => {
    setModelOpen(false);
  };

  const handleJobDetailsClose = () => {
    setSelectedJob(null);
    closeModel();
  };

  useEffect(() => {
    if (!isAuthorized) {
      navigate("/login");
    }
  }, [isAuthorized]);

  return (
    <>
      <section className="otherJobPage">
        <div className="container">
          <h1>Other Available Jobs</h1>
          <form onSubmit={handleSubmit}>
            <div className="inputTag">
              <label>Job Role</label>
              <div>
                <input
                  type="text"
                  value={jobRole}
                  onChange={(e) => setJobRole(e.target.value)}
                  placeholder="Enter Job Role"
                />
              </div>
            </div>
            <div className="inputTag">
              <label>Location</label>
              <div>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Enter Job Location"
                />
              </div>
            </div>
          {loading ? 
          <div className="loaderContainer"> 
          <CircularProgress style={{color: "#0096c7"}} /> </div> 
          :<button type="submit">Search Jobs</button>}
          </form>

        </div>
      </section>
      {show ? (
        <section className="jobs page">
          <div className="container">
            <h1>Available Jobs</h1>
            <div className="banner">
              {jobs && jobs.length > 0 ? (
                jobs.map((element) => (
                  <div className="card" key={element.job_id}>
                    <p>{element.title}</p>
                    <p>{element.company}</p>
                    <p>{element.location}</p>
                    <div>
                      <button
                        id="otherJobsBtn"
                        onClick={() => handleButton(element)}
                        style={{ padding: "10px" }}
                      >
                        More
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p>No Jobs Found</p>
              )}
            </div>
          </div>
        </section>
      ) : (
        <></>
      )}
      {modelOpen && selectedJob && (
        <OtherJobDetails job={selectedJob} onClose={handleJobDetailsClose} />
      )}
    </>
  );
};

export default OtherJobs;
