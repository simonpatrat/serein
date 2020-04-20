import React from "react";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <>
      <h2>404</h2>

      <p>Sorry this page does not Exist</p>
      <p>
        Maybe you should return to <Link to="/">home page</Link> and try another
        page...
      </p>
    </>
  );
};

export default Page404;
