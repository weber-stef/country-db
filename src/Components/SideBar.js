import React, { Component } from 'react'
import AppContext from './AppContext';


export default class SideBar extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {context =>
          context.results.map((country, index) =>
            <li key={index} className="pointer" onClick={context.handleClick}>
              {country.name}

            </li>)



        }

      </AppContext.Consumer>
    )
  }
}
