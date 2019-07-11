import React from 'react';
import Moment from "react-moment";
import { Link } from "react-router-dom";
import LatestQuakes from "./LatestQuakes";

export default class QuakeDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      type: undefined,
      properties: '',
      geometry: '',
      latitude: '',
      longitude: '',
      id: undefined,
      error: undefined
    };
  }

  componentDidMount() {
    fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/'+this.props.match.params.id+'.geojson')
      .then(response => response.json())
      .then(data => this.setState(
        {
          properties: data.properties,
          geometry: data.geometry,
          longitude: data.geometry.coordinates[0],
          latitude: data.geometry.coordinates[1],
          id: data.id
        }))
      .catch((error) => {
        console.log('There has been a problem with the fetch operation: ', error.message);
      });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <div className="py-2">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title"><strong>Magnitude {this.state.properties.title}</strong></h4>
              <p className="card-text"><em><Moment local={true} format="LLLL">{this.state.properties.time}</Moment></em></p>
              <img className="img my-3" src="http://via.placeholder.com/500x300?text=Map Placeholder" alt=""/>
              <h6>Details</h6>
              <div>
                <span className="d-block">Magnitude: {this.state.properties.mag}</span>
                <span className="d-block">Location: {this.state.properties.place}</span>
                <span className="d-block">Latitude: {this.state.latitude}</span>
                <span className="d-block">Longitude: {this.state.longitude}</span>

              </div>
            </div>
          </div>
        </div>
        <Link className="btn btn-primary" to="./latest">Return to List</Link>
      </div>

    );
  }
}
