import React from 'react';
import DetailsTab from './DetailsTab';

const GeneralTab = ({ title, data, className }) => (
  <DetailsTab title={title} className={className}>
    <div className="flex-items">
    {
      data && data.length > 0 ? (
        data.map((value,i) => <span key={`i+${value}`}>{value}</span>)
      ) : 
      (
        <span>No details.</span>
      )
    }
    </div>
  </DetailsTab>
);

export default GeneralTab;