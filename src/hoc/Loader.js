import React from 'react';

const Loader = (prop) => (WrappedComp) => {
  const isNullOrEmpty = (prop) => !prop || (Array.isArray(prop) && prop.length === 0);
  
  return (props) => (
     isNullOrEmpty(props[prop]) ? <div className="loader"></div> : <WrappedComp {...props}/>
  )
}

export default Loader;