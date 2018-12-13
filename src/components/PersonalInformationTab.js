import React from 'react';
import DetailsTab from './DetailsTab';

const PersonalInformationTab = ({ title, name, age, height, weight, hair_color}) => (
  <DetailsTab title={title}>
    <p className="table-row">
      <span className="bold">Full Name</span>
      <span>{name}</span>
    </p>
    <p className="table-row">
      <span className="bold">Age</span>
      <span>{age}</span>
    </p>
    <p className="table-row">
      <span className="bold">Height</span>
      <span>{height}</span>
    </p>
    <p className="table-row">
      <span className="bold">Weight</span>
      <span>{weight}</span>
    </p>
    <p className="table-row">
      <span className="bold">Hair color</span>
      <span>{hair_color}</span>
    </p>
  </DetailsTab>
);

export default PersonalInformationTab;