import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

const CapitalOption = props => {
  const {capitalObject} = props
  const {id, capitalDisplayText} = capitalObject

  return <option value={id}>{capitalDisplayText}</option>
}

class Capitals extends Component {
  state = {capitalId: countryAndCapitalsList[0].id}

  onChangeOfOption = event => {
    this.setState({capitalId: event.target.value})
    console.log(event.target.value)
  }

  filteredCountry = () => {
    const {capitalId} = this.state
    const filterList = countryAndCapitalsList.filter(
      eachItem => eachItem.id === capitalId,
    )
    // console.log(filterList)
    return filterList[0].country
  }

  render() {
    const countryName = this.filteredCountry()
    // console.log(countryName)
    return (
      <div className="bg-container">
        <div className="country-capital-card">
          <h1 className="country-capital-heading">Countries And Capitals</h1>
          <div className="select-card">
            <select
              className="select-element"
              id="capital"
              onChange={this.onChangeOfOption}
            >
              {countryAndCapitalsList.map(eachItem => (
                <CapitalOption key={eachItem.id} capitalObject={eachItem} />
              ))}
            </select>
            <label htmlFor="capital" className="label">
              is capital of which country?
            </label>
          </div>
          <div className="country-card">
            <p className="country">{countryName}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Capitals
