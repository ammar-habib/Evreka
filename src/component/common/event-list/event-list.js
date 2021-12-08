import React from 'react';

const EventList = (props) => {
    return (
        <div className="eventListing__list">
            <div className="eventListing__text">
                <div><b>Date</b></div>
                <div></div>
            </div>
            <div className="eventListing__text">
                <div><b>Type</b></div>
                <div>Sudden Temperate increase</div>
            </div>
            <div className="eventListing__text">
                <div><b>Bin ID</b></div>
                <div><u>8720</u></div>
            </div>
            <div className="eventListing__text">
                <div><b>Temperature</b></div>
                <div>80c</div>
            </div>
            <div className="eventListing__text">
                <div><b>Action</b></div>
                <div>Mark As Resolved</div>
            </div>
        </div>
    );
}

export default EventList;