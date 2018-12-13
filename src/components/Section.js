import React, { Fragment } from 'react';
import Pagination from './Pagination';
import PeopleList from './PeopleList';

const Section = ({ people }) => (
  <section>
    {
      people.length > 0 ?
      (
        <Fragment>
          <PeopleList people={people}/>
          <Pagination />
        </Fragment>
      ) : 
      <span>No people found.</span>
    }
  </section>
);

export default Section;