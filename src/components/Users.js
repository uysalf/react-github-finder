import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import User from "./User";
import Loading from "./Loading";

import axios from "axios";
const Users = (props) => {
  return (
    <>
      {props.isloading ? (
        <Loading loadingUrl={props.loadingUrl}></Loading>
      ) : (
        <div className="container mt-3">
          <div className="row">
            {props.users.map((user) => {
              return <User key={user.id} userInfo={user}></User>;
            })}
          </div>
        </div>
      )}
    </>
  );
};

Users.propTypes = {};

export default Users;
