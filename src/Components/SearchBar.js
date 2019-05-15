import React, { Component } from 'react';
import AppContext from './AppContext';

export default class SearchBar extends Component {

  filterCountry = React.createRef();

  render() {
    return (
      <AppContext.Consumer>
        {context =>
          <header className="header">
            <label htmlFor="search">Search country:</label>
            <input name="search" type="text" ref={this.filterCountry} onChange={() => { context.filterResults(this.filterCountry) }} placeholder={`Look for country`} />
          </header>
        }
      </AppContext.Consumer>
    );
  }

}

