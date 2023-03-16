import React from "react";

import './SocialCard.css';

import { useNavigate } from "react-router-dom";


const SocialCard = ({ userData }) => {
  const navigate = useNavigate()

const {id, prefix, name , lastName, imageUrl} =  userData

  return (
    <div className="card" onClick={() => navigate(`/user/${id}`)}>
      <div className="card__content">
        <img src={imageUrl} alt="image" />
        <div className="card__content-description">
          <strong>
            {prefix} {name} {lastName}{" "}
          </strong>
        </div>
        <div className="card__content-description">
            {userData.title}
        </div>
      </div>
    </div>
  );
};

export default SocialCard;
