import React, {Component} from 'react';
import {Button, Modal, Tab, Tabs, Form} from "react-bootstrap";
import ActionTaken from "../action-taken/action.taken";


class TakeAction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showActionTaken: false,
        };
    }

    render() {
        return (
            <React.Fragment>
                <Modal className="common-modal" size="lg" aria-labelledby="contained-modal-title-vcenter" centered
                       show={this.props.show} onHide={this.props.hide}>
                    <Modal.Header closeButton/>
                    <Modal.Body>
                        <Tabs defaultActiveKey="select action" id="action-tab"
                              className="customTabs customTabs--action mb-4 justify-content-center">
                            <Tab eventKey="select action" title="SELECT ACTION">
                                <div className="actionListing">
                                    <div className="actionList">
                                        <p className="actionList__title"><b>Mark As Resolved</b></p>
                                        <p className="actionList__text">Mark this event as resolved and enter the
                                            details
                                            of the resolution.</p>
                                    </div>
                                    <div className="actionList">
                                        <p className="actionList__title"><b>Change Asset</b></p>
                                        <p className="actionList__text">Change the asset with another one.</p>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <Button className="customBtn" variant="secondary">Next</Button>
                                </div>
                            </Tab>
                            <Tab eventKey="take action" title="2 TAKE ACTION">
                                <div className="mb-4">
                                    <p className="mb-1"><b>Mark As Resolved</b></p>
                                    <p className="mb-1">Mark this event as resolved and enter the details
                                        of the resolution.</p>
                                </div>
                                <Form.Group>
                                    <Form.Label>Resolution Detail*</Form.Label>
                                    <Form.Control placeholder="Enter resolution detail…" as="textarea" rows="3"/>
                                </Form.Group>
                                <ul className="list-inline text-center mb-0">
                                    <li className="list-inline-item mb-1">
                                        <Button className="customBtn" variant="primary">Back</Button>
                                    </li>
                                    <li className="list-inline-item mb-1">
                                        <Button className="customBtn" variant="secondary">Take Action</Button>
                                    </li>
                                </ul>
                            </Tab>
                        </Tabs>
                    </Modal.Body>
                </Modal>
                <ActionTaken
                    show={this.state.showActionTaken}
                    hide={() => this.setState({showActionTaken: false})}
                />
            </React.Fragment>
        )
    }
}

export default TakeAction


