import React, { useEffect, useState, useRef } from "react";
import SocialCard from "../SocialCard/SocialCard";
import { useParams } from "react-router-dom";

import "../../App.css";

const Friends = ({ handleClick }) => {
  const [friends, setFriends] = useState([]);
  const [page, setPage] = useState(0);
  const loader = useRef(null);


  const params = useParams();

  const { userId } = params;

  const [pagination, setPagination] = useState(25);

  const [loading, setLoading] = useState(false);

  

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      threshold: 1.0,
    });
    if (loader.current) {
      observer.observe(loader.current);
    }
  }, []); //eslint-disable-line

  useEffect(() => {
    // Fetch data from your API or database
    if (pagination) {
      fetchData();
    }
  }, [page, pagination, userId]); //eslint-disable-line

  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) {
      setPage((page) => page + 1);
    }
  };

  const fetchData = () => {
    setLoading(true);
    fetch(
      `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${userId}/friends/${page}/20`
    )
      .then((response) => response.json())
      .then((data) => {
        setLoading(true);
        setFriends((items) => [...items, ...data?.list]);
        setPagination(data.pagination?.nextPage === null ? false : true);
      })
      .then(() => setLoading(false));
  };

  return (
      <div className="cards-container">
        {friends.map((user, index) => (
          <SocialCard key={index} userData={user} />
        ))}
        {!pagination && "no more data"}
        {loading && <span className="loader"></span>}
        <div ref={loader} />
      </div>
  );
};

export default Friends;
