import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CardStyle.css';

const ListCard = ({ title, listItems = [], buttonText = "Know More" }) => {
  const navigate = useNavigate();

  return (
    <div className="card custom-card shadow-lg border-0 p-4 text-center">
      <h5 className="fw-bold mb-2">{title}</h5>
      <div className="wave-line"></div>

      <div className="list-group list-group-flush my-3">
        {listItems.map((item, idx) => (
          <button
            key={idx}
            className="list-group-item list-group-item-action d-flex justify-content-between align-items-center custom-list"
            onClick={() => item.link && navigate(item.link)}
          >
            {item.title || item} {/* Support both objects with link or plain string */}
            {item.link && <span className="text-primary fs-5">→</span>}
          </button>
        ))}
      </div>

      <button className="btn btn-primary fw-bold w-100 custom-btn">
        {buttonText}
      </button>
    </div>
  );
};

export default ListCard;
