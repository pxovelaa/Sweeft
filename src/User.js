import React from "react";
import { useParams } from "react-router-dom";
import Home from "./Home";
import { useState, useEffect } from "react";
import "./User.css"


const User = () => {
  const params = useParams();

  const { userId } = params;
  const [user, setUser] = useState([]);


  useEffect(() => {
    fetch(
      `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${userId}`
    )
      .then((resp) => resp.json())
      .then((apiData) => {
        setUser(apiData);
      });
  }, [userId]);
  console.log(user);
  return (
    <div className="wrapper">
        <div>

        </div>
      <Home />
    </div>
  );
};

export default User;
