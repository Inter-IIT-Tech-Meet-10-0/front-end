import React from 'react'
import Classes from './event_timeline.module.css';

function EventTimeline() {

    return (
        <div className={Classes.mainContainer}>
            <div className={Classes.container}>
                <EventCard />
                <EventCard />
                <EventCard />
            </div>
        </div>
    )
}

function EventCard() {
    
    return (
        <div className={ Classes.cardContainer}>
           <div className={ Classes.date}>27</div>
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
