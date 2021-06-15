
import './App.css';
import axios from 'axios';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Pictures from './Photos'
import React from "react";
import Loader from "react-loader-spinner";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class App extends React.Component {

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
      <Router>
        <div>
          <div className="sidebar">
            <ul>
              <li>
                <h1><Link to="/">Albums</Link></h1>
              </li>
              <li>
                { this.state.albums.map(albums => (<Link to="/photos"> <li className="wanted">{albums.id}. {albums.title}</li></Link>))}
              </li>
            </ul>
          </div>


          <div className="content">

            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/photos">
                <Photos />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}


function Home() {
  return (
    <div>
      <h2 className="mainheading">Welcome To Albums</h2>
      <h2>Click on image to view large</h2>
    </div>
  );
}

function Photos() {
  return (
    <div>
      <Loader type="ThreeDots" color="#f5deb3" height={80} width={80} timeout={500}/>
      <Pictures />
    </div>
  );
}







