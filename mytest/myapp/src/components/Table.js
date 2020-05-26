import React, { Component } from 'react'
import {FaStar} from 'react-icons/fa'
import index from '../index'

export default class extends Component {
    render() {
        console.log(this.props)
        let flagCA;
      if (this.props.data.data_1[0].country === 'Canada' ){
          flagCA = <img src='https://www.countryflags.io/ca/flat/64.png' ></img>
      }

      let flagDE;
      if (this.props.data.data_1[1].country === 'Germany' ){
        flagDE = <img src='https://www.countryflags.io/de/flat/64.png' ></img>
    }

    let flagUS;
    if (this.props.data.data_1[2].country === 'United States' ){
        flagUS = <img src='https://www.countryflags.io/us/flat/64.png' ></img>
    }


    const results = this.props.data;
        return (
            <div>
                <table id='countries'>
                    <thead>
                        <tr>
                            <th> {this.props.columns[0][0]} </th>
                            <th> {this.props.columns[0][1]} </th>
                            <th> {this.props.columns[0][2]} </th>
                            <th> {this.props.columns[0][3]} </th>
                            <th> {this.props.columns[0][4]} </th>
                            <th> {this.props.columns[0][5]} </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td> {this.props.data.data_1[0].name} </td>
                            <td>
                                <FaStar className={results.data_1[0].movie_rating > 0 ? 'star' : 'nostar'} />
                                <FaStar className={results.data_1[0].movie_rating > 1 ? 'star' : 'nostar'} />
                                <FaStar className={results.data_1[0].movie_rating > 2 ? 'star' : 'nostar'} />
                                <FaStar className={results.data_1[0].movie_rating > 3 ? 'star' : 'nostar'} />
                                <FaStar className={results.data_1[0].movie_rating > 4 ? 'star' : 'nostar'} />
                            </td>
                            <td> {this.props.data.data_1[0].age} </td>
                            <td> {this.props.data.data_1[0].city} </td>
                            <td> {this.props.data.data_1[0].region} </td>
                            
                            <td> {flagCA} </td>
                        </tr>
                        <tr>
                            <td> {this.props.data.data_1[1].name} </td>
                            <td>
                                <FaStar className={results.data_1[1].movie_rating > 0 ? 'star' : 'nostar'} />
                                <FaStar className={results.data_1[1].movie_rating > 1 ? 'star' : 'nostar'} />
                                <FaStar className={results.data_1[1].movie_rating > 2 ? 'star' : 'nostar'} />
                                <FaStar className={results.data_1[1].movie_rating > 3 ? 'star' : 'nostar'} />
                                <FaStar className={results.data_1[1].movie_rating > 4 ? 'star' : 'nostar'} />
                            </td>
                            <td> {this.props.data.data_1[1].age} </td>
                            <td> {this.props.data.data_1[1].city} </td>
                            <td> {this.props.data.data_1[1].region} </td>
                            <td> {flagDE}  </td>
                        </tr>
                        <tr>
                            <td> {this.props.data.data_1[2].name} </td>
                            <td>
                                <FaStar className={results.data_1[2].movie_rating > 0 ? 'star' : 'nostar'} />
                                <FaStar className={results.data_1[2].movie_rating > 1 ? 'star' : 'nostar'} />
                                <FaStar className={results.data_1[2].movie_rating > 2 ? 'star' : 'nostar'} />
                                <FaStar className={results.data_1[2].movie_rating > 3 ? 'star' : 'nostar'} />
                                <FaStar className={results.data_1[2].movie_rating > 4 ? 'star' : 'nostar'} />
                            </td>
                            <td> {this.props.data.data_1[2].age} </td>
                            <td> {this.props.data.data_1[2].city} </td>
                            <td> {this.props.data.data_1[2].region} </td>
                            <td> {flagUS}  </td>
                        </tr>
                    </tbody>
                    <tfoot>
                    </tfoot>
                </table>

                <table id='items'  >
                    <thead>
                        <tr>
                            <th> {this.props.columns[1][0]} </th>
                            <th> {this.props.columns[1][1]} </th>
                            <th> {this.props.columns[1][2]} </th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='food'> {this.props.data.data_2[0].item} </td>
                            <td> {this.props.data.data_2[0].size} </td>
                            <td className='inventory'> {this.props.data.data_2[0].inventory} </td>
                        </tr>
                        <tr>
                            <td className='food'> {this.props.data.data_2[1].item} </td>
                            <td> {this.props.data.data_2[1].size} </td>
                            <td className='inventory'> {this.props.data.data_2[1].inventory} </td>
                        </tr>
                        <tr>
                            <td className='food'> {this.props.data.data_2[2].item} </td>
                            <td> {this.props.data.data_2[2].size} </td>
                            <td className='inventory'> {this.props.data.data_2[2].inventory} </td>
                        </tr>
                        <tr>
                            <td className='food'> {this.props.data.data_2[3].item} </td>
                            <td> {this.props.data.data_2[3].size} </td>
                            <td className='inventory'> {this.props.data.data_2[3].inventory} </td>
                        </tr>

                    </tbody>
                    <tfoot>
                    </tfoot>
                </table>


            </div>
        )
    }
}
