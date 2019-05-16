import React, { Component } from 'react'
import AppContext from './AppContext';
import NumberFormat from 'react-number-format';

export default class Details extends Component {

  render() {

    return (

      <AppContext.Consumer>
        {

          (laenderinhalte) => (
            //             {
            //  languagesSpoken =[];
            // langz = () => {
            //                 for (let i = 0; i < laenderinhalte.chosenCountry.languages.length; i++) {
            //                   languagesSpoken.push{ laenderinhalte.chosenCountry.languages[i].name }
            //                 }
            //                 return languagesSpoken
            //               }
            //             }
            < div > <h1>{laenderinhalte.chosenCountry.name}</h1>
              <p>{<NumberFormat value={laenderinhalte.chosenCountry.population} displayType={'text'} thousandSeparator={true} />} Inhabitants are living in the country {laenderinhalte.chosenCountry.capital ? ' , many of them in the Capital, whose name is ' : ''} {laenderinhalte.chosenCountry.capital}.</p>
              <p>{laenderinhalte.chosenCountry.languages.length} {laenderinhalte.chosenCountry.languages.length > 1 ? ' languages are spoken' : '  language is spoken '} in the country of {laenderinhalte.chosenCountry.name}, which is part of the {laenderinhalte.chosenCountry.region}
                {laenderinhalte.chosenCountry.subregion ? ' in the subregion of ' : ''}{laenderinhalte.chosenCountry.subregion}. </p>

              This is {laenderinhalte.chosenCountry.name}'s Flag:
            <br /> <br />
              <img src={laenderinhalte.chosenCountry.flag} width="200" alt={"Flag of " + laenderinhalte.chosenCountry.name} /> <div />
              {/* how do I map through the countries language names? 
              laenderinhalte.chosenCountry.languages[0].name etc*/}




            </div>
          )}

      </AppContext.Consumer>
    )
  }
}
