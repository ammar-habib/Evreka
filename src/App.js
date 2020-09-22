import React, {Component} from 'react';
import {Container, Row, Col, Tabs, Tab, Form, Button} from "react-bootstrap";
import './App.css';
import EventList from "./component/common/event-list/event-list";

class App extends Component {
    render() {
        return (
            <div className="page-wrapper">
                <Container fluid>
                    <Row className="">
                        <Col xl="8">
                            <h3 className="heading3 text-uppercase">Events</h3>
                            <div className="eventListing">
                                <EventList/>
                            </div>
                        </Col>
                        <Col xl="4">
                            <h3 className="heading3 text-uppercase">Event details</h3>
                            <div className="p-2 bg-white">
                                <Form.Row>
                                    <Col xl="6" className="mb-3">
                                        <Button className="customBtn" variant="primary" block>no action
                                            needed</Button>
                                    </Col>
                                    <Col xl="6" className="mb-3">
                                        <Button className="customBtn" variant="secondary" block>take action</Button>
                                    </Col>
                                </Form.Row>
                                <Tabs defaultActiveKey="details" id="details-tab" className="customTabs mb-3">
                                    <Tab eventKey="details" title="DETAILS">
                                        <Row>
                                            <Col xl="6" className="mb-3">
                                                <div><b>Temperature Threshold</b></div>
                                                <div>50c</div>
                                            </Col>
                                            <Col xl="6" className="mb-3">
                                                <div><b>Sensor</b></div>
                                                <div>50c</div>
                                            </Col>
                                        </Row>
                                    </Tab>
                                    <Tab eventKey="location" title="LOCATION">
                                        location
                                    </Tab>
                                    <Tab eventKey="media" title="MEDIA">
                                        media
                                    </Tab>
                                </Tabs>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default App;
