import { Link } from "react-router-dom";

import "./project.scss";

function ProjectCard({ title, detailPage, coverImg, liveDemo, description }) {
  return (
    <div className="projectcard">
      <div className="imgwrapper">
        {detailPage ? (
          <Link to={`/${detailPage}`}>
            <img src={`/${coverImg}`} alt="" />
          </Link>
        ) : (
          <img src={`/${coverImg}`} alt="" />
        )}
      </div>
      <h4>{title}</h4>
      {/* <div className="description"></div> */}
      <p>{description}</p>
      <div className="projectcardbutton">
        {detailPage && (
          <a to={`/${detailPage}`}>
            <button>Learn More</button>
          </a>
        )}
        <a href={liveDemo} target="_blank">
          {/* <button>Live Demo</button> */}
          Live Demo
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
