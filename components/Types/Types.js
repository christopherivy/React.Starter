import React from "react";
import PropTypes from "prop-types";

function Types(props) {
  return (
    <React.Fragment>
      <div className="col-sm-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Name: {props.title}</h5>
            <p className="card-text"> Bio:{props.bio}</p>
            <p className="card-text">Has Car:{props.summary} </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

// THIS IS THE VALIDATION CHECK
Types.propTypes = {
  title: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
};

export default Types;
