import React from "react";
import Body from "../components/Body";

function Home() {
  const tokenValue = JSON.parse(localStorage.getItem("token"));

  return (
    <>
      {tokenValue ? (
        <div>
          <Body />
        </div>
      ) : (
        <div className="container">
          <h1>Log in First!!</h1>
        </div>
      )}
    </>
  );
}

export default Home;
