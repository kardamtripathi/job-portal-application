import React from "react";

const OtherJobDetails = ({ job, onClose }) => {
  return (
    <div className="otherJob-modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <section className="otherJobDetail page">
          <div className="container">
            <h3>Job Details</h3>
            <div className="banner">
              <p>
                Title: <span>{job.title}</span>
              </p>
              <p>
                Company: <span>{job.company}</span>
              </p>
              <p>
                Location: <span>{job.location}</span>
              </p>
              <p>
                Description: <span>{job.description}</span>
              </p>
              <p>
                Related Links:{" "}
                  {job.links.map((link, index) => (
                    <a key={index} href={link.link} target="_blank">
                      {`Link-${index + 1}`}
                    </a>
                  ))}
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OtherJobDetails;
