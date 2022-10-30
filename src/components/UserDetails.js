import React from "react";
import { useParams, useLocation, useSearchParams } from "react-router-dom";
const UserDetails = (props) => {
  let params = useParams();
  console.log(params.login);
  return <div>Merhaba User Details</div>;
};

export default UserDetails;
