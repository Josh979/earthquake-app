import React from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

const QuakeListItem = (props) => {
  //console.log(props.quake);
  return (
    <div className="py-2">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-2">
              <h1 className="text-center">{props.quake.properties.mag}</h1>
            </div>
            <div className="col-md-10">
              <h4>
                {props.quake.properties.place}
              </h4>
              <p className="card-text"><em><Moment local={true} format="LLLL">{props.quake.properties.time}</Moment></em></p>
              <Link to={'./details/' + props.quake.id} className="card-link btn btn-primary btn-sm">View Details</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuakeListItem;
