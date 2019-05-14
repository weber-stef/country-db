import React, { Component } from 'react'
import AppContext from './AppContext';

export default class Details extends Component {
  render() {
    return (

      <AppContext.Consumer>
        {(laenderinhalte) => (
          <div><h1>{laenderinhalte.chosenCountry.name}</h1>
            <p>{laenderinhalte.chosenCountry.population}</p>


          </div>
        )}

      </AppContext.Consumer>
    )
  }
}
