import React from 'react';
import QuakeListItem from "./QuakeListItem";
import moment from 'moment';

// todo -- Automatically add new earthquakes as they appear, without reloading the page
// todo -- Save to localstorage and return that originally and if api pull fails

export default class LatestQuakes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      features: [],
      metadata: undefined,
      error: undefined
    };
  }

  componentDidMount() {
    const time = moment().subtract(1,'hour').toISOString();
    console.log(time);
    fetch('https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime='+time+'&minmagnitude=2&latitude=34&longitude=-118&maxradius=10')
      .then(response => response.json())
      .then(data => this.setState(
        {
          features: data.features,
          metadata: data.metadata
        }))
      .catch((error) => {
        console.log('There has been a problem with the fetch operation: ', error.message);
      });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <div className="p-3">
          <h3> Nearby 2.0+ Earthquakes Detected In The Last Hour: <strong>{this.state.features.length}</strong></h3>
          {
            this.state.features.map((quakeData, index) => (
              <QuakeListItem
                key={'quake' + index}
                quake={quakeData}
              />
            ))
          }
        </div>
      </div>
    );
  }
}
