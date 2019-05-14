import React, { Component } from 'react';
import AppProvider from './Components/AppProvider';
import AppContext from './Components/AppContext';
import SearchBar from './Components/SearchBar';
import Details from './Components/Details';
import SideBar from './Components/SideBar';
import './App.css';


export default class App extends Component {

  constructor(props) {
    super()

    this.state = {
      results: null,
      searchTerm: "germany",
      name: "",
      region: "",
      subregion: "",
      translations: "",
      flag: "",
      search: () => {
        fetch(`https://restcountries.eu/rest/v2/all`)
          .then(response => response.json())
          .then(data => this.setState({ results: data }));

      }
    }
  }

  componentDidMount() {
    this.state.search()
  }

  render() {

    return (
      this.state.results &&

      <AppProvider>

        <SearchBar />

        <AppContext.Consumer>
          {context =>
            context.results &&
            <div className="content">

              <aside>
                <ul>
                  <SideBar />
                </ul>
              </aside>

              <main>
                <Details />
              </main>
            </div>
          }
        </AppContext.Consumer>
      </AppProvider>
    )
  }

}