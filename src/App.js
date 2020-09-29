import React, {Component} from 'react';
import {Container, Row, Col, Tabs, Tab, Form, Button, Alert} from "react-bootstrap";
import './App.css';
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
                this.setState({activeEventDetail: items}, () => {
                    console.log("hello", this.state.activeEventDetail);

                });
                this.setState({activeEventLocation: items.location}, () => {
                    // console.log(this.state.activeEventLocation);
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
                }
                console.log("detail", detail)
            })
        }


    }


    render() {
        return (
            <div className="page-wrapper">
                <Container>
                    <div className="page-content">
                        <Form.Row className="">
                            <Col xl="8">
                                <h3 className="heading3 text-uppercase">Events</h3>
                                <div className="eventListing">
                                    {API.data.map((items, i) => {

                                        {
                                            return (
                                                <div key={i}
                                                     className={"eventListing__list" + (items.id == this.state.activeEvent ? ' selected ' : ' ') + (items.eventActionItem ? 'action' : ' ')}
                                                     onClick={() => this.handleClick(items.id)}>
                                                    <div className="eventListing__text">
                                                        <div><b>Tarih</b></div>
                                                        {items.details.map((detail, i) => {
                                                            if (detail.format == "date") {
                                                                return <div key={i}>
                                                                    <div>{detail.value}</div>
                                                                </div>
                                                            }

                                                        })}
                                                    </div>
                                                    <div className="eventListing__text">
                                                        <div><b>Tip</b></div>
                                                        {items.details.map((detail, i) => {
                                                            if (detail.format == "incident_type") {
                                                                return <div key={i}>
                                                                    <div>{detail.value}</div>
                                                                </div>
                                                            }

                                                        })}
                                                    </div>
                                                    <div className="eventListing__text">
                                                        <div><b>Event ID</b></div>
                                                        <div><u>{items.id}</u></div>
                                                    </div>
                                                    <div className="eventListing__text">
                                                        <div><b>Araç</b></div>
                                                        {items.details.map((detail, i) => {
                                                            if (detail.format == "vehicle") {
                                                                return <div key={i}>
                                                                    <div>{detail.value}</div>
                                                                </div>
                                                            }

                                                        })}
                                                    </div>
                                                    <div className="eventListing__text">
                                                        <div><b>Aksiyon</b></div>
                                                        {items.details.map((detail, i) => {
                                                            if (detail.title == "Aksiyon") {
                                                                return <div key={i}>
                                                                    <div>{detail.value}</div>
                                                                </div>
                                                            }
                                                        })}
                                                    </div>
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                            </Col>
                            <Col xl="4">
                                <h3 className="heading3 text-uppercase">Event details</h3>
                                {this.state.activeEventDetail ? (
                                        <div className="p-2 bg-white">
                                            {this.state.noActionNeed ? (
                                                <Form.Row>
                                                    <Col sm="6" className="mb-3">
                                                        <Button className="customBtn" variant="primary" block
                                                                onClick={() => this.noAction(this.state.activeEventDetail.id)}>no
                                                            action
                                                            needed</Button>
                                                    </Col>
                                                    <Col sm="6" className="mb-3">
                                                        <Button className="customBtn" variant="secondary" block
                                                                onClick={() => this.setState({showActionModal: true})}>take
                                                            action</Button>
                                                    </Col>
                                                </Form.Row>

                                                // this.state.activeEventDetail.map((item, i) => {
                                                //     {
                                                //         return (
                                                //
                                                //         )
                                                //     }
                                                // })

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
                    </div>
                </Container>
                <TakeAction
                    show={this.state.showActionModal}
                    hide={() => this.setState({showActionModal: false})}
                />
            </div>
        );
    }
}

export default App;
