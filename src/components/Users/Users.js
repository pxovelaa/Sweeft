import React, { useEffect, useState, useRef } from "react";
import SocialCard from "../SocialCard/SocialCard";
import "../../App.css";

const Users = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(0);
  const loader = useRef(null);

  const [pagination, setPagination] = useState(true);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      threshold: 1.0,
    });
    if (loader.current) {
      observer.observe(loader.current);
    }
  }, []);

  useEffect(() => {
    // Fetch data from your API or database
    if (pagination) {
        fetchData()
    }
  }, [page, pagination]);

  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) {
      setPage((page) => page + 1);
    }
  };

  const fetchData = () => {
    setLoading(true)
    fetch(
      `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${page}/20`
    )
      .then((response) => response.json())
      .then((data) => {
        setLoading(true)
        setItems((items) => [...items, ...data?.list]);
        setPagination(data.pagination?.nextPage === null ? false : true);
      }).then(() => setLoading(false))
  };

  return (
      <div className="cards-container">
        {items.map((user, index) => (
          <SocialCard key={index} userData={user} />
        ))}
        {!pagination && "no more data"}
        {loading && <span className="loader"></span>}
        <div ref={loader} />

     </div>
  );
};

export default Users;
