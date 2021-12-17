import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Container, Row, Col, Tabs, Tab, Form, Button, Alert} from "react-bootstrap";
import './App.css';
import TakeAction from "./component/take-action/take-action";
import Location from "./component/common/location/location";
import EventList from "./component/common/event-list/event-list";
import Details from "./component/common/details/event-list";
import EventMedia from "./component/common/media/event-media";
import {cloneDeep} from 'lodash'

function App() {
    const [events, setEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState();
    const [openActionModal, setOpenActionModal] = useState(false);

    console.log("openActionModal", openActionModal)
    console.log("selectedEvent", selectedEvent)

    useEffect(() => {
        getALLEvents()
    }, [])


    const getALLEvents = () => {
        axios.get("./data.json").then((response) => {
            const allEvents = response.data;
            setEvents(allEvents.data);

        })
            .catch(error => console.error(`Error: ${error}`));
    }
    const noActionNeeded = (id) => {
        const _selectedEvent = cloneDeep(events)
        console.log("_selectedEvent", events)

        console.log("_selectedEvent id", id)

        _selectedEvent.forEach(event => {
            if (event.id == id) {
                event.details.forEach((eventItem) => {
                        eventItem.title === "Aksiyon" &&
                        (eventItem.value = "No Action Need")
                    }
                )
                setEvents(_selectedEvent)
            }
        })

    }

    const taKeAction = (id) => {
        setOpenActionModal(true)
    }

    return (
        <div className="page-wrapper">
            <Container>
                <div className="page-content">
                    <Form.Row className="">
                        <Col xl="8">
                            <h3 className="heading3 text-uppercase">Events</h3>
                            <div className="eventListing">
                                {events.length > 0 && events?.map((event, index) => (
                                    <EventList key={index} data={event} selectedEventData={selectedEvent} setSelectedEvent={setSelectedEvent}/>
                                ))}
                            </div>
                        </Col>
                        <Col xl="4">
                            <h3 className="heading3 text-uppercase">Event details</h3>
                            <div className="p-2 bg-white">
                                {!!selectedEvent && (
                                    <Form.Row>
                                        <Col sm="6" className="mb-3">
                                            <Button className="customBtn" variant="primary" block onClick={() => noActionNeeded(selectedEvent.id)}>no
                                                action
                                                needed</Button>
                                        </Col>
                                        <Col sm="6" className="mb-3">
                                            <Button className="customBtn" variant="secondary" block onClick={() => taKeAction(selectedEvent.id)}>take
                                                action</Button>
                                        </Col>
                                    </Form.Row>
                                )}
                                <Tabs defaultActiveKey="details" id="details-tab" className="customTabs mb-3">
                                    <Tab eventKey="details" title="DETAILS">
                                        {!!selectedEvent ? (
                                            <Details details={selectedEvent.details}/>
                                        ) : (
                                            <Alert className="w-100" variant="info">Please selected any row</Alert>
                                        )
                                        }
                                    </Tab>
                                    <Tab eventKey="location" title="LOCATION">
                                        {!!selectedEvent ? (
                                            <Location locationDetail={selectedEvent.location}/>
                                        ) : (
                                            <Alert className="w-100" variant="info">Please selected any row</Alert>
                                        )
                                        }

                                    </Tab>
                                    <Tab eventKey="media" title="MEDIA">
                                        {!!selectedEvent ? (
                                            <EventMedia mediaDetail={selectedEvent.media}/>
                                        ) : (
                                            <Alert className="w-100" variant="info">Please selected any row</Alert>
                                        )
                                        }
                                    </Tab>
                                </Tabs>
                            </div>
                        </Col>
                    </Form.Row>
                </div>
                {openActionModal &&
                <TakeAction show={openActionModal}
                            setOpenActionModal = {setOpenActionModal}
                />
                }
            </Container>
        </div>
    );
}

export default App;

