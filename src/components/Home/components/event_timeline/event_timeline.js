import React from 'react'
import Classes from './event_timeline.module.css';
import { Carousel } from "3d-react-carousal";


function EventTimeline() {

    let slides = [<EventCard/>,<EventCard/>,<EventCard/>,<EventCard/>];



    return (
        <div className={Classes.container}>
           <Carousel className={Classes.slides} slides={slides} />
        </div>
    )
}

function EventCard() {
    return (
        <div className={Classes.cardContainer}>
           <div className={Classes.date}>27</div>
           <div className={Classes.month}>November</div>
            <div className={Classes.eventC}>
                <div className={Classes.eventName}>Event today: Cycle Trip</div>
                <div className={Classes.eventName}>Event today: Cycle Trip</div>
                <div className={Classes.eventName}>Event today: Cycle Trip</div>
            </div>
        </div>
    )
}



export default EventTimeline
