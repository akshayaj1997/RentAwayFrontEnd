import React, { Component } from 'react'
import ReactSearchBox from 'react-search-box'

export default class SearchBar extends Component {
  data = [
    {
      key: 'hyderabad',
      value: 'Hyderabad, India',
    },
    {
      key: 'paris',
      value: 'Paris, France',
    },
    {
      key: 'maryland',
      value: 'Mary Land, USA',
    },
    {
      key: 'melbourne',
      value: 'Melbourne, Australia',
    },
  ]

  render() {
    return (
      <ReactSearchBox
        placeholder="Search"
        value="Doe"
        data={this.data}
        callback={record => console.log(record)}
      />
    )
  }
}