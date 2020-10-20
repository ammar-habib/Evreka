import React, {Component} from 'react';
import {Container, Row, Col, Tabs, Tab, Form, Button, Alert} from "react-bootstrap";
import {PageWrapper, PageContent, Heading3, EventListing, EventList, EventListText} from './style.js';
import TakeAction from "./component/take-action/take-action";
import Location from "./component/common/location/location";
import API from "./api";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showActionModal: false,
            showActionTaken: false,
            activeEvent: null,
            activeEventDetail: false,
            activeEventLocation: false,
            eventAction: [],
            eventActionItem: false,
            noActionNeed: true,
        };
    }

    componentDidMount() {
        let actionArr = [];
        API.data.map((items) => {
            items.details.map((detail) => {
                if (detail.title == "Aksiyon" && (detail.value == "-" || detail.value == "")) {
                    items.eventActionItem = true;
                    actionArr.push(items.id);
                }
            })
        })

        this.setState({eventAction: actionArr}, () => {
            console.log("eventAction", this.state.eventAction)

        })

    }

    handleClick = id => {
        this.setState({activeEvent: id});
        API.data.map((items) => {
            if (items.id == id) {
                this.setState({
                    activeEventDetail: items,
                    activeEventLocation: items.location,
                    noActionNeed: true
                }, () => {
                });
            }
        })
    };

    noAction = id => {
        console.log("active event id", id);
        this.setState({noActionNeed: false}, () => {
            console.log("noActionNeed", this.state.noActionNeed)

        })
        if (this.state.activeEventDetail.id == id) {
            this.state.activeEventDetail.details.map((detail) => {
                console.log("detail", detail)
                if (detail.title == "Aksiyon") {
                    detail.value = "no action need"
                    this.state.activeEventDetail.eventActionItem = false;
                }
            })
        }
    }

    takeAction = id => {
        if (this.state.activeEventDetail.id == id) {
            this.setState({showActionModal: true}, () => {
                console.log("noActionNeed", this.state.noActionNeed)

            })
        }
    }


    render() {
        return (
            <PageWrapper>
                <Container>
                    <PageContent>
                        <Form.Row>
                            <Col xl="8">
                                <Heading3>Events</Heading3>
                                <EventListing>
                                    {API.data.map((items, i) => {

                                        {
                                            return (
                                                <EventList selected={items.id == this.state.activeEvent}
                                                           action={items.eventActionItem} key={i}
                                                           onClick={() => this.handleClick(items.id)}>
                                                    <EventListText>
                                                        <div><b>Tarih</b></div>
                                                        {items.details.map((detail, i) => {
                                                            if (detail.format == "date") {
                                                                return <div key={i}>
                                                                    {detail.value}
                                                                </div>
                                                            }

                                                        })}
                                                    </EventListText>
                                                    <EventListText>
                                                        <div><b>Tip</b></div>
                                                        {items.details.map((detail, i) => {
                                                            if (detail.format == "incident_type") {
                                                                return <div key={i}>
                                                                    {detail.value}
                                                                </div>
                                                            }

                                                        })}
                                                    </EventListText>
                                                    <EventListText>
                                                        <div><b>Event ID</b></div>
                                                        <div><u>{items.id}</u></div>
                                                    </EventListText>
                                                    <EventListText>
                                                        <div><b>Araç</b></div>
                                                        {items.details.map((detail, i) => {
                                                            if (detail.format == "vehicle") {
                                                                return <div key={i}>
                                                                   {detail.value}
                                                                </div>
                                                            }

                                                        })}
                                                    </EventListText>
                                                    <EventListText>
                                                        <div><b>Aksiyon</b></div>
                                                        {items.details.map((detail, i) => {
                                                            if (detail.title == "Aksiyon") {
                                                                return <div key={i}>
                                                                    {detail.value}
                                                                </div>
                                                            }
                                                        })}
                                                    </EventListText>
                                                </EventList>
                                            )
                                        }
                                    })}
                                </EventListing>
                            </Col>
                            <Col xl="4">
                                <Heading3>Event details</Heading3>
                                {this.state.activeEventDetail ? (
                                        <div className="p-2 bg-white">
                                            {this.state.noActionNeed ? (
                                                <Form.Row>
                                                    <Col sm="6" className="mb-3">
                                                        <Button block onClick={() => this.noAction(this.state.activeEventDetail.id)}>no action needed</Button>
                                                    </Col>
                                                    <Col sm="6" className="mb-3">
                                                        <Button className="customBtn" variant="secondary" block
                                                                onClick={() => this.takeAction(this.state.activeEventDetail.id)}>take
                                                            action</Button>
                                                    </Col>
                                                </Form.Row>


                                            ) : ''}

                                            <Tabs defaultActiveKey="details" id="details-tab" className="customTabs mb-3">
                                                <Tab eventKey="details" title="DETAILS">
                                                    <Row className="m-0">
                                                        {this.state.activeEventDetail.details ? this.state.activeEventDetail.details.map((item, i) => {
                                                            {
                                                                // console.log('Htllo: ', this.state.activeEventDetail.details)
                                                            }
                                                            return (
                                                                <Col key={i} xl="6" className="mb-3">
                                                                    <div><b>{item.title}</b></div>
                                                                    <div>{item.value}</div>
                                                                </Col>
                                                            )
                                                        }) : (<Alert className="w-100" variant="info">No Detail is
                                                            available </Alert>)}
                                                    </Row>
                                                </Tab>
                                                <Tab eventKey="location" title="LOCATION">
                                                    {this.state.activeEventLocation ?
                                                        <Location
                                                            lat={this.state.activeEventLocation.latitude}
                                                            lng={this.state.activeEventLocation.longitude}
                                                        />

                                                        : (<Alert variant="info">No Location is Available</Alert>)}

                                                </Tab>
                                                <Tab eventKey="media" title="MEDIA">
                                                    {/*{console.log('Htllo: ', this.state.activeEventDetail.media)}*/}
                                                    {this.state.activeEventDetail.media ? this.state.activeEventDetail.media.map((item, i) => {
                                                        if (item.url == "") {
                                                            return <Alert variant="info">No Media Available</Alert>
                                                        } else {
                                                            if (item.type == "image") {
                                                                return <div key={i} className="imgDiv mediaImg">
                                                                    <img src={item.url} className="img-fluid imgDiv__img"/>
                                                                </div>
                                                            } else if (item.type == "audio") {
                                                                return <div className="text-center">
                                                                    <audio key={i} controls>
                                                                        <source src={item.url}/>
                                                                        Your browser does not support the audio element.
                                                                    </audio>
                                                                </div>
                                                            }
                                                        }

                                                    }) : (<Alert variant="info">No Media is Available</Alert>)}
                                                </Tab>
                                            </Tabs>

                                        </div>
                                    ) :
                                    (<Alert className="w-100" variant="info">Please Selected any Row</Alert>)
                                }
                            </Col>
                        </Form.Row>
                    </PageContent>
                </Container>
                <TakeAction
                    show={this.state.showActionModal}
                    hide={() => this.setState({showActionModal: false})}
                />
            </PageWrapper>
        );
    }
}

export default App;
