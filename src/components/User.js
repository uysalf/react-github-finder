import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
//https://docs.github.com/en/rest/reference/users
const User = (props) => {
  // const [state, setState] = useState({
  //   id: "19492591",
  //   name: "Sadık Turan",
  //   login: "sadikturan",
  //   avatar_url: "https://avatars.githubusercontent.com/u/19492591?v=4",
  //   html_url: "https://github.com/sadikturan",
  //   followers: 2925,
  //   blog: "sadikturan.com",
  // });
  const { name, login, avatar_url, html_url, followers, blog } = props.userInfo;
  return (
    <div className="col-sm-12 col-md-6 col-lg-3">
      <div className="card mt-2">
        <img src={avatar_url} alt="" className="img-fluid"></img>

        <div className="card-body">
          <h5 className="card-title">{login}</h5>

          <a href={html_url} className="btn btn-primary btn-sm" target="_blank">
            Go Profile
          </a>
        </div>
      </div>
    </div>
  );
};

User.propTypes = {};

export default User;
