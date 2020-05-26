import React, { Component } from 'react'
import Table from './components/Table'

export default class App extends Component {
  render() {
    const data = {
      data_1 : [
          {
            name: "John",
            age: 29,
            movie_rating: 4,
            city: "Vancouver",
            region: "British Columbia",
            country: "Canada",
          },
          {
            name: "Sarah",
            age: 32,
            movie_rating: 5,
            city: "Frankfurt",
            region: "Hesse",
            country: "Germany",
          },
          {
            name: "Dave",
            age: 44,
            movie_rating: 4,
            city: "San Diego",
            region: "California",
            country: "United States",
          },
        ],
      data_2 : [
        {
          item: "apple",
          inventory: 12,
          size: "medium",
        },
        {
          item: "blueberry",
          inventory: 103,
          size: "small",
        },
        {
          item: "grapefruit",
          inventory: 4,
          size: "large",
        },
        {
          item: "strawberry",
          inventory: 14,
          size: "small",
        },
      ]
      
    }
    
    const columns = [
      ['Name', 'Rating', 'Age', 'City', 'State/Province', 'Country'],
      ['Food Product', 'Size', 'Inventory']
  ];


    return (
      <div>
        <h1>The Table Challenge </h1>
        <Table data={data} columns={columns} />
      </div>
    )
  }
}
