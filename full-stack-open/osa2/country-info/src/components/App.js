import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Country from './Country'
import Search from './Search'

const App = ( props ) => {

  /* ------------------------------------------------------------ */

  const [ defaultValue, setValue    ] = useState('')
  const [ countries, setCountries   ] = useState([])
  const [ showAll, setShowAll       ] = useState(true)
  // const [ dataObject, setDataObject ] = useState([])

  /* ------------------------------------------------------------ */

  const handleValueChange = (event) => {
      setValue(event.target.value)
  }

  const hook = () => {
      console.log('effect')
      axios
          .get('https://restcountries.eu/rest/v2/all')
          .then(response => {
              console.log('promise fulfilled')
              setCountries(response.data)
          })
  }

  // console.log(countries) this has all the countries from API

  useEffect(hook, [])

  /*
  const countriesToShow = showAll
      ? countries
      : countries.filter(country)
  */

  /* ------------------------------------------------------------ */

  return (

    <div>
          <Search
              handleValueChange={handleValueChange}
              defaultValue={defaultValue}
          />

          <ul>
              {countries.map((country) =>
                  <Country key={country.id} country={country} />
              )}
          </ul>
    </div>
  )
}

export default App;
