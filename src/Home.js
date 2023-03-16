import React from "react";
import { useState, useEffect } from "react";
import SocialCard from "./SocialCard";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [pagination, setPagination] = useState(25);

  const navigate = useNavigate();


  useEffect(() => {
    fetch(
      `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/0/${pagination}`
    )
      .then((resp) => resp.json())
      .then((apiData) => {
        setUsers(apiData.list);
      });
  }, [pagination]);

  return (
    <div className="cards-container">
      {users.map((user, index) => (
        <SocialCard key={index} userData={user}  />
      ))}
      <button onClick={() => setPagination(pagination + 10)}>More</button>
    </div>
  );
};

export default Home;
