import React from 'react';
import ListCard from './ListCard';
import './CardStyle.css';

export const CollectionCard = () => {
  const cardsData = [
    {
      title: "Electors",
      listItems: [
        { title: "Homepage", link: "/sections/electorals/homepage" },
        { title: "Search Electoral List", link: "/sections/electorals/search" },
        { title: "Sir Final Roll", link: "/sections/electorals/sir-finalroll" },
        { title: "Sir Final Roll Full AC", link: "/sections/electorals/sir-finalroll-fullAC" },
        { title: "Search Name Draft Roll", link: "/sections/electorals/search-name-draft-roll" }
      ],
      buttonText: "Know More"
    },
    {
      title: "POLITICAL PARTY/CANDIDATE",
      listItems: [
        { title: "New Party Registration", link: "/sections/newpartyregistration" },
        { title: "Election Symbol Allotment", link: "/sections/electionsymbolallotment" },
        { title: "Nomination", link: "/sections/nomination" },
        { title: "e-Affidavit", link: "/sections/affidavit" },
        { title: "Permission", link: "/sections/permission" }
      ],
      buttonText: "Know More"
    },
    {
      title: "ECI OFFICIALS",
      listItems: [
        { title: "Observer Portal", link: "/sections/eci/observerportal" },
        { title: "Compendium of Instructions", link: "/sections/eci/compendium" },
        { title: "Handbook", link: "/sections/eci/handbook" },
        { title: "Postal Ballots", link: "/sections/eci/postalballots" },
        { title: "Service Voter Portal", link: "/sections/eci/servicevoterportal" }
      ],
      buttonText: "Know More"
    }
  ];

  return (
    <div className="collection-container">
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
