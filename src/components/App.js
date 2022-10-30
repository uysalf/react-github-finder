// import "@fortawesome/fontawesome-free/css/all.css";
//https://docs.github.com/en/rest/reference/users
import React, { Fragment, useState, useEffect } from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import Users from "./Users";
import axios from "axios";
import loadingUrl from "../img/loading.gif";
import Home from "./Home";
import UserDetails from "./UserDetails";
import About from "./About";
import Products from "./Products";
import Product from "./Product";
import NoMatch from "./NoMatch";
import { Routes, Route } from "react-router-dom";

const App = (props) => {
  return (
    <Fragment>
      {/* <Navbar title="Github" /> */}
      <MyRouters {...props}></MyRouters>
    </Fragment>
  );
};

function MyRouters(props) {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar title="Github" />}>
          <Route index element={<Home />} />
          <Route
            index
            path="/user/:login"
            element={<UserDetails {...props} />}
          />
          <Route path="about" element={<About />} />

          <Route path="products" element={<Products />}>
            <Route
              index
              element={
                <main style={{ padding: "1rem" }}>
                  <p>Select an invoice</p>
                </main>
              }
            />
            <Route path=":id" element={<Product {...props} />} />
          </Route>

          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
