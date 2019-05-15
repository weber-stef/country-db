import React, { Component } from 'react';
import AppContext from './AppContext';

export default class AppProvider extends Component {
  state = {
    searchTerm: "",
    results: null,
    chosenCountry: "",
    search: (searchTerm = "all") => {
      fetch(`https://restcountries.eu/rest/v2/all`)
        .then(response => response.json())
        .then(data => this.setState({ results: data, chosenCountry: data[62] }));
      // chosen country[62] zeigt nun Dänemark als default an
    },
    handleClick: (e) => {
      let laenderInfo;
      laenderInfo = this.state.results.filter(country => country.name === e.target.innerText);
      this.setState({ chosenCountry: laenderInfo[0] })
    },
    filterResults: (searchInput) => {
      this.setState({ searchTerm: searchInput.current.value.toLowerCase() })
    }
  }
  componentDidMount() {
    this.state.search()
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}