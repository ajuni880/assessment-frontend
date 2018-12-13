import React from 'react';
import PeopleListItem from './PeopleListItem';

const PeopleList = ({ people}) => (
  <div className="people-list">
    <ul className="people-list__body">
      {
        people.map((person, i) => <PeopleListItem key={i} {...person}/>)
      }
    </ul>
  </div>
);

export default PeopleList;