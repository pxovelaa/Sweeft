import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./User.css";
import Friends from "../Friends/Friends";

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

  const {
    id,
    imageUrl,
    name,
    lastName,
    prefix,
    title,
    jobDescriptor,
    jobArea,
    jobType,
    email,
    ip,
  } = user;
  return (
    <div className="wrapper">
      <div className="header">
        <img className="userImage" src={imageUrl + `?v=${id}`} alt="lastname" />
        <fieldset className="left-info">
          <legend>Info</legend>
          <div>
            <strong>
              {prefix} {name} {lastName}
            </strong>
          </div>
          <div>
            <i>{title}</i>
          </div>
          <br />
          <div>
            <span>Email:</span> {email}
          </div>
          <div>
            <span>Ip Addres:</span> {ip}
          </div>
          <div>
            <span>Job Descripto:</span> {jobDescriptor}
          </div>
          <div>
            <span>Job Area:</span> {jobArea}
          </div>
          <div>
            <span>Job Type:</span> {jobType}
          </div>
        </fieldset>
        <fieldset className="right-info">
          <legend>Address</legend>
          <div>
            <strong>
              {user?.company?.suffix} {user?.company?.name}
            </strong>
          </div>
          <div>
            <span>City:</span> {user?.address?.city}
          </div>
          <div>
            <span>Country:</span> {user?.address?.country}
          </div>
          <div>
            <span>State:</span> {user?.address?.state}
          </div>
          <div>
            <span>Street Address:</span> {user?.address?.streetAddress}
          </div>
          <div>
            <span>ZIP:</span> {user?.address?.zipCode}
          </div>
        </fieldset>
      </div>
      <div>
        <div></div>
      </div>
      <Friends />
    </div>
  );
};

export default User;
