import React from 'react';
import PersonalInformationTab from './PersonalInformationTab';
import GeneralTab from './GeneralTab';
// {id, name, thumbnail, age, weight, height, hair_color, professions, friends }
const PersonDetails = (props) => (
  props && (
    <div className="person-details">
      <span className="btn btn-close" onClick={props.onClick}>&times;</span>
      <div className="person-details__header">
        <img src={props.thumbnail} alt={props.name}/>
      </div>
      <div className="person-details__body">
        <PersonalInformationTab 
          title="Personal Information"
          {...props}
        />
        <GeneralTab 
          title="Professions"
          data={props.professions}
        />
        <GeneralTab 
          title="Friends"
          data={props.friends}
        />
      </div>
    </div>
  )
);

// const mapStateToProps = (state) => ({
//   selectedPerson: state.people.selectedPerson
// });

// export default connect(mapStateToProps)(PersonDetails);
export default PersonDetails;
