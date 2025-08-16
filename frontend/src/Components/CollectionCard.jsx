import React from 'react';
import ListCard from './Listcard';
import './CardStyle.css';

export const CollectionCard = () => {
  // Data for each card
  const cardsData = [
    {
      title: "Electors",
      listItems: [
        "Register Now To Vote",
        "Check Application Status",
        "Know Your Polling Booth",
        "Search Name in Voter list",
        "Register Complaint"
      ],
      buttonText: "Know More"
    },
    {
      title: "POLITICAL PARTY/CANDIDATE",
      listItems: [
        "New Party Registration",
        "Election Symbol Allotment",
        "Nomination",
        "e-Affidavit",
        "Permission"
      ],
      buttonText: "Know More"
    },
    {
      title: "ECI OFFICIALS",
      listItems: [
        "Handbooks/Manuals/Checklist",
        "Compendium of Instructions",
        "Postal Ballots",
        "Service Voter Portal",
        "Observer Portal"
      ],
      buttonText: "Know More"
    }
  ];

  return (
    <div className="collection-container ">
      {cardsData.map((card, index) => (
        <div key={index} className="collection-item">
          <ListCard
            title={card.title}
            listItems={card.listItems}
            buttonText={card.buttonText}
          />
        </div>
      ))}
    </div>
  );
};

export default CollectionCard;