import React from 'react';
import { connect } from 'react-redux';
import selectPeople from '../selectors/people';
import { setSelectedPerson } from '../actions/people';
import Loader from '../hoc/Loader';

import Section from './Section';
import Aside from './Aside';

const People = ({ people, selectedPerson, setSelectedPerson}) => (
  <div className="container">
    <div className="people">
      <Section 
        people={people}
      />
      <Aside 
        setSelectedPerson={setSelectedPerson} 
        selectedPerson={selectedPerson}
      />
    </div>
  </div>
);

const mapStateToProps = ({ filters, people, pagination}) => ({
  people: selectPeople(filters, people.people, pagination),
  selectedPerson: people.selectedPerson,
});

const mapDispatchToProps = (dispatch) => ({
  setSelectedPerson: (id) => dispatch(setSelectedPerson(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Loader('selectedPerson')(People));