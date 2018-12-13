import React, { Component } from 'react';
import Header from './Header';
import PeopleFilter from './PeopleFilter';
import People from './People';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="page">
        <Header />
        <div className="page__content">
          <PeopleFilter />
          <People />
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;
