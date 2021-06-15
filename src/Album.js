import React from 'react';

import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    albums: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/albums`)
      .then(res => {
        const albums = res.data;
        this.setState({ albums });
      })
  }

  render() {
    return (
      <ul>
        { this.state.albums.map(albums => <li>Album {albums.id}</li>)}
      </ul>
    )
  }
}