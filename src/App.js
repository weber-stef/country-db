import React, { Component } from 'react';
import AppProvider from './Components/AppProvider';
import AppContext from './Components/AppContext';
import SearchBar from './Components/SearchBar';
import Details from './Components/Details';
import SideBar from './Components/SideBar';
import './App.css';


export default class App extends Component {
  render() {

    return (
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