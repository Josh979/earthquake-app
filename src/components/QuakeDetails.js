import React from 'react';
import Moment from "react-moment";
import { Link } from "react-router-dom";
import GoogleMaps from "simple-react-google-maps"

export default class QuakeDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mapReady: false,
      type: undefined,
      properties: '',
      felt: 0,
      geometry: '',
      latitude: 0,
      longitude: 0,
      id: undefined,
      error: undefined
    };
  }

  componentDidMount() {
    fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/'+this.props.match.params.id+'.geojson')
      .then(response => response.json())
      .then(data => this.setState(
        {
          mapReady: true,
          properties: data.properties,
          geometry: data.geometry,
          longitude: data.geometry.coordinates[0],
          latitude: data.geometry.coordinates[1],
          depth: data.geometry.coordinates[2],
          felt: data.properties.felt,
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
              <div className="map-container">
                {this.state.mapReady === true && (
                  <GoogleMaps
                    apiKey={"API_KEY"}
                    style={{height: "100%", width: "100%"}}
                    zoom={8}
                    center={{lat: this.state.latitude, lng: this.state.longitude}}
                    markers={{lat: this.state.latitude, lng: this.state.longitude}} //optional
                  />
                )}
              </div>
              <h5>Quake Details</h5>
              <div>
                <span className="d-block">Magnitude: {this.state.properties.mag}</span>
                <span className="d-block">Location: {this.state.properties.place}</span>
                <span className="d-block">Reports: {this.state.felt}</span>

                <span className="d-block">Latitude: {this.state.latitude}</span>
                <span className="d-block">Longitude: {this.state.longitude}</span>
                <span className="d-block">Depth: {this.state.depth}</span>
              </div>
            </div>
          </div>
        </div>
        <Link className="btn btn-primary" to="/latest">Return to List</Link>
      </div>

    );
  }
}
