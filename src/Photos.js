import React from 'react';
import './photo.css';
import axios from 'axios';
import { SRLWrapper } from "simple-react-lightbox";

export default class PersonList extends React.Component {
  state = {
    photos: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/photos`)
      .then(res => {
        const photos = res.data;
        this.setState({ photos });
      })
  }

  render() {
    return (
      <SRLWrapper>
        <ul>
          {this.state.photos.map(photos => <li className="imgThumb"> <a href={photos.url}> <img src={photos.thumbnailUrl} alt="" /> </a> </li>)}
        </ul>
      </SRLWrapper>
    )
  }
}