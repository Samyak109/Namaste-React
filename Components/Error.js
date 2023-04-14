import React from "react";
import { useRouteError } from "react-router-dom";
const Error = () => {
    const error = useRouteError();
    console.log(error);
  return (
    <div>
      <h1>OOps!!!!!!</h1>
      <h2>Something went wrong</h2>
        <p>{error.status} : {error.statusText}</p>
    </div>
  );
};

export default Error;
