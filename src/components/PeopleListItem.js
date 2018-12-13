import React from 'react';

const PeopleListItem = ({ id, name, age, thumbnail, friends, onClick }) => (
  <li>
    <a href={`#${id}`} className="people-list__item">
      <div className="people-list__thumb">
        <img src={thumbnail} alt={name}/>
      </div>
      <div className="people-list__summary">
        <p className="bold">{name}</p>
        
        <div className="people-list__data">
          <p className="table-row">
            <span className="bold">Age{' '}</span>
            <span>{age}</span>
          </p>
          <p>
            <span className="bold">Friends{' '}</span>
            <span>{friends.length}</span>
          </p>
        </div>
      </div>
    </a>
  </li>
);


export default PeopleListItem;