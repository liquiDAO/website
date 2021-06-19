import React from 'react';
import './../scss/road.scss';
import BookmarkSimple from './../assets/images/BookmarkSimple.png';
import Check from './../assets/images/Check.png';
import Clock from './../assets/images/Clock.png';

export const Status = {
  Planned: 'Planned',
  Progress: 'Progress',
  Done: 'Done',
};

function RoadItem(props) {
  return (
    <div className="RoadItem">
      <div className="RoadItem__circle__container">
        <div className="RoadItem__circle"></div>
      </div>
      <div className="RoadItem__content">
        <p className="RoadItem__title">{props.title}</p>
        <p className="RoadItem__description">{props.text}</p>
      </div>
      <div className="RoadItem__status">
        <div className="RoadItem__icon__block">
          {props.status === Status.Planned ? (
            <img
              src={BookmarkSimple}
              className="RoadItem__icon"
              alt="BookmarkSimple-icon"
            />
          ) : props.status === Status.Progress ? (
            <img src={Clock} className="RoadItem__icon" alt="Clock-icon" />
          ) : (
            <img src={Check} className="RoadItem__icon" alt="Check-icon" />
          )}
          <p className="RoadItem__status">{props.status}</p>
        </div>
      </div>
    </div>
  );
}

export default RoadItem;
