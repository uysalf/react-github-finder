import PropTypes from "prop-types";
import React, { Fragment, useState, useEffect } from "react";
import Search from "./Search";
import Users from "./Users";
import axios from "axios";
import loadingUrl from "../img/loading.gif";

import {
  Routes,
  Route,
  Outlet,
  Link,
  useMatch,
  useResolvedPath,
  NavLink,
} from "react-router-dom";
function Home(props) {
  const [users, setUsers] = useState([]);
  const [isloading, setIsloading] = useState(true);
  useEffect(() => {
    console.log("componentDidMount");
    // axios
    //   .get("https://api.github.com/users")
    //   .then((res) => {
    //     setUsers(res.data);
    //   })
    //   .catch((error) => {
    //     console.log("hata get user:", error);
    //   });

    getUsers().then((data) => {
      setTimeout(() => {
        setUsers(data);
        setIsloading(false);
      }, 50);
    });
  }, []);

  useEffect(() => {
    console.log("componentdidmount");
  }, []);

  useEffect(() => {
    console.log("comonentdidupdate");
  }, [users]);

  // const getUsers = async () => {
  async function getUsers() {
    try {
      setIsloading(true);
      const response = await axios.get("https://api.github.com/users");
      // setUsers(response.data);

      return await response.data;
    } catch (error) {
      console.log("hata get user:", error);
    }
  }

  const onClickSearch = (searchValue) => {
    searchUser(searchValue).then((response) => {
      console.log(response);
      setUsers(response.data.items);
      setIsloading(false);
    });
  };

  const searchUser = async (searchValue) => {
    try {
      console.log(searchValue);
      setIsloading(true);
      const response = await axios.get(
        `https://api.github.com/search/users?q=${searchValue}`
      );
      return await response;
    } catch (error) {
      console.log("hata search user:", error);
      setIsloading(false);
    }
  };
  return (
    <main className="container">
      <div className="bg-light p-5">
        <Search onClickSearch={onClickSearch}></Search>

        <Users
          users={users}
          isloading={isloading}
          loadingUrl={loadingUrl}
        ></Users>
        {users.length == 0 && (
          <div className="alert alert-danger" role="alert">
            <i className="fas fa-exclamation-circle"></i> User bulunamadı.
          </div>
        )}
      </div>
    </main>
  );
}

Home.propTypes = {};

export default Home;
