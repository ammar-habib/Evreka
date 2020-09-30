import React, {Component} from 'react';
import {Button, Modal, Tab, Tabs, Form} from "react-bootstrap";
import ActionTaken from "../action-taken/action.taken";

const actionListing = [
    {id: 1, title: 'Mark As Resolved', content: 'Mark this event as resolved and enter the details of the resolution.'},
    {id: 2, title: 'Change Asset', content: 'Change the asset with another one.'}
];

class TakeAction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showActionTaken: false,
            activeListId: null
        };
    }

    activeList = id => {
        console.log("list id", id);
        // this.setState({activeList: true});
        actionListing.map((list) => {
            console.log("list", list);
            if (list.id == id) {
                this.setState({
                    activeListId: id
                }, () => {
                });
            }
        })
    };

    render() {
        return (
            <React.Fragment>
                <Modal className="common-modal" size="lg" aria-labelledby="contained-modal-title-vcenter" centered
                       show={this.props.show} onHide={this.props.hide}>
                    <Modal.Header closeButton/>
                    <Modal.Body>
                        <Tabs defaultActiveKey="select action" id="action-tab"
                              className="customTabs customTabs--action mb-4 justify-content-center">
                            <Tab eventKey="select action" title="1 SELECT ACTION">

                                <div className="actionListing">
                                    {actionListing.map((list, i) => {
                                        return (
                                            <div key={i} className={"actionList" + (list.id == this.state.activeListId ? ' selected ' : ' ')}
                                                 onClick={() => this.activeList(list.id)}>
                                                <p className="actionList__title"><b>{list.title}</b></p>
                                                <p className="actionList__text">{list.content}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="text-center">
                                    <Button className="customBtn" variant="secondary" disabled>Next</Button>
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


