import React, {useEffect, useState} from 'react';

const EventList = ({data, selectedEventData, setSelectedEvent}) => {
    const [checkEventAction, setCheckEventAction] = useState();
    // console.log("checkEventAction", checkEventAction)
    const selectedEvent = (id) => {
        if (data.id == id) {
            setSelectedEvent(data);
        }
    }
    const checkEventHasAction = () => {
        let eventsWithOnAction
        data.details.map((eventItem) => (
                eventItem.title === "Aksiyon" && (eventItem.value === "" || eventItem.value === "-") ? (
                    eventsWithOnAction = data
                ) : ''
            )
        )
        setCheckEventAction(eventsWithOnAction)
    }

    useEffect(() => {
        if (data) {
            checkEventHasAction()
        }
    }, [data])

    return (
        <div className={`eventListing__list ${data.id == selectedEventData?.id ? 'selected' : ''} ${checkEventAction ? 'action' : ''}`} onClick={() => selectedEvent(data.id)}>
            {data.details.length > 0 && data.details?.map((item, index) => (
                item.title === "Tarih" || item.title === "Tip" || item.title === "Rota İsmi" || item.title === "Kategori" || item.title === "Aksiyon" ? (
                    <div key={index} className="eventListing__text">
                        <div><b>{item.title}</b></div>
                        <div>{item.value}</div>
                    </div>
                ) : ''
            ))}
        </div>
    );
}

export default EventList;