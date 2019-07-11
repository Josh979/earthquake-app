import React from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

const QuakeListItem = (props) => {
  //console.log(props.quake);
  return (
    <div className="py-2">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title"><strong>Magnitude {props.quake.properties.mag}</strong> - {props.quake.properties.place}</h4>
          <p className="card-text"><em><Moment local={true} format="LLLL">{props.quake.properties.time}</Moment></em></p>
          <Link to={'./details/' + props.quake.id} className="card-link btn btn-primary btn-sm">View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default QuakeListItem;
