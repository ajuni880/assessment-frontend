import React from 'react';

const DetailsTab = ({ title, children, className }) => (
  <div className={`details-tab ${className || ''}`}>
    <h4 className="details-tab__title">{title}</h4>
    <div className="details-tab__info">
      {children}      
    </div>
  </div>
);

export default DetailsTab;