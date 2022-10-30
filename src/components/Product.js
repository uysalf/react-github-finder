import React from "react";
import { useParams, useLocation, useSearchParams } from "react-router-dom";
const Product = (props) => {
  let params = useParams();
  let location = useLocation();

  const [searchParams] = useSearchParams();
  console.log("searchParams:", searchParams.toString());
  for (const entry of searchParams.entries()) {
    console.log("entry:", entry);
  }

  console.log("params:", params);
  console.log("location:", location);
  return <div>Product Page {params.id}</div>;
};

export default Product;
