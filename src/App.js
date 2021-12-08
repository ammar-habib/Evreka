import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Container, Row, Col, Tabs, Tab, Form, Button, Alert} from "react-bootstrap";
import './App.css';
import TakeAction from "./component/take-action/take-action";
import Location from "./component/common/location/location";
import EventList from "./component/common/event-list/event-list";

function App() {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        getALLEvents()
    }, [])

    const getALLEvents = () => {
        axios.get("./data.json").then((response) => {
            const allEvents = response.data;
            setEvents(allEvents);
            console.log("events", allEvents)
        })
            .catch(error => console.error(`Error: ${error}`));
    }
    return (
        <div className="page-wrapper">
            <Container>
                <div className="page-content">
                    <Form.Row className="">
                        <Col xl="8">
                            <h3 className="heading3 text-uppercase">Events</h3>
                            {events.length > 0 &&  events?.map((event, index) => (
                                <div className="user">1</div>
                            ))}
                            {/*<div className="eventListing">*/}
                            {/*    <div className="eventListing__list">*/}
                            {/*        <div className="eventListing__text">*/}
                            {/*            <div><b>Tarih</b></div>*/}
                            {/*            <div>*/}
                            {/*                <div>detail.value</div>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*        <div className="eventListing__text">*/}
                            {/*            <div><b>Tip</b></div>*/}
                            {/*            <div>*/}
                            {/*                <div>detail.value</div>*/}
                            {/*            </div>*/}

                            {/*        </div>*/}
                            {/*        <div className="eventListing__text">*/}
                            {/*            <div><b>Event ID</b></div>*/}
                            {/*            <div><u>items.id</u></div>*/}
                            {/*        </div>*/}
                            {/*        <div className="eventListing__text">*/}
                            {/*            <div><b>Araç</b></div>*/}
                            {/*            <div>*/}
                            {/*                <div>detail.value</div>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*        <div className="eventListing__text">*/}
                            {/*            <div><b>Aksiyon</b></div>*/}
                            {/*            <div>*/}
                            {/*                <div>detail.value</div>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </Col>
                        <Col xl="4">
                            <h3 className="heading3 text-uppercase">Event details</h3>
                            <div className="p-2 bg-white">
                                <Form.Row>
                                    <Col sm="6" className="mb-3">
                                        <Button className="customBtn" variant="primary" block>no action
                                            needed</Button>
                                    </Col>
                                    <Col sm="6" className="mb-3">
                                        <Button className="customBtn" variant="secondary" block>take action</Button>
                                    </Col>
                                </Form.Row>


                                <Tabs defaultActiveKey="details" id="details-tab" className="customTabs mb-3">
                                    <Tab eventKey="details" title="DETAILS">
                                        <Row className="m-0">
                                            <Col xl="6" className="mb-3">
                                                <div><b>item.title</b></div>
                                                <div>item.value</div>
                                            </Col>
                                            <Alert className="w-100" variant="info">No Detail is
                                                available </Alert>
                                        </Row>
                                    </Tab>
                                    <Tab eventKey="location" title="LOCATION">
                                        <Location
                                            lat="0"
                                            lng="0"
                                        />
                                        <Alert variant="info">No Location is Available</Alert>

                                    </Tab>
                                    <Tab eventKey="media" title="MEDIA">

                                        <Alert variant="info">No Media Available</Alert>

                                        <div className="imgDiv mediaImg">
                                            <img src="item.url" className="img-fluid imgDiv__img"/>
                                        </div>

                                        <div className="text-center">
                                            <audio controls>
                                                <source src="item.url"/>
                                                Your browser does not support the audio element.
                                            </audio>
                                        </div>
                                        <Alert variant="info">No Media is Available</Alert>
                                    </Tab>
                                </Tabs>
                            </div>
                            <Alert className="w-100" variant="info">Please Selected any Row</Alert>

                        </Col>
                    </Form.Row>
                </div>
            </Container>
        </div>
    );
}

export default App;

