import React from 'react';
import PersonDetails from './PersonDetails';


const Aside = ({ selectedPerson, setSelectedPerson }) => (
  <aside 
    className={`people__left ${window.innerWidth <= 480 && selectedPerson ?  'people__left--mob' : '' }`}>
    {
      selectedPerson ? 
        <PersonDetails {...selectedPerson} onClick={() => {
          setSelectedPerson(null);
        }}/> 
      : 
        <p>No person selected.</p>
    }
  </aside>
);

export default Aside;