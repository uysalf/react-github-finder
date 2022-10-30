import React from "react";
import { createSearchParams, useNavigate, Outlet } from "react-router-dom";
const Products = (props) => {
  //   const params = useParams();
  const navigate = useNavigate();

  const onclick = (e) => {
    e.preventDefault();

    // navigate("12/test=123");

    navigate({
      pathname: "12",
      search: `?${createSearchParams({
        foo: "bar",
        aa: "bb",
      })}`,
    });
  };

  return (
    <div>
      Products Page
      <button onClick={onclick}>Ürüne git</button>
      <Outlet />
    </div>
  );
};

export default Products;
