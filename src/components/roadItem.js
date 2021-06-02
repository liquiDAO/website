import React from 'react'
import './../scss/road.scss'


function RoadItem(props){

   

    return(
        <div className='RoadItem'>
            <div className="RoadItem__content">
                <p className="RoadItem__title">{props.title}</p>
                <p className="RoadItem__description">{props.text}</p>
            </div>
            <div className="RoadItem__status">
                <div>
                    <div className="RoadItem__icon-circle" />
                </div>
                <a href="/">Viwe</a>
            </div>
        </div>
    )
}

export default RoadItem