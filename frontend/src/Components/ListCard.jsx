import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CardStyle.css';

const ListCard = ({ title, listItems = [], buttonText = "Know More" }) => {
  return (
    <div className="card custom-card shadow-lg border-0 p-4 text-center">
      <h5 className="fw-bold mb-2">{title}</h5>
      <div className="wave-line"></div>

      <div className="list-group list-group-flush my-3">
        {listItems.map((item, idx) => (
          <button
            key={idx}
            className="list-group-item list-group-item-action d-flex justify-content-between align-items-center custom-list"
          >
            {item}
            <span className="text-primary fs-5">→</span>
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