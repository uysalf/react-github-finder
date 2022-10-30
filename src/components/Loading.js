import React from "react";
import PropTypes from "prop-types";

const Loading = (props) => {
  return (
    <React.Fragment>
      <img
        src={props.loadingUrl}
        alt="loading..."
        style={{ width: "200px", display: "block", margin: "auto" }}
      />
    </React.Fragment>
  );
};

Loading.propTypes = {};

export default Loading;
