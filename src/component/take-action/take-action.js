import React, {Component, useCallback} from 'react';
import {Button, Modal, Tab, Tabs, Form} from "react-bootstrap";
import {Heading3, Btn, MyTabs} from '../../style.js';
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
            activeTab: 1,
            activeList: {},
            activeBtn: false,
            resolutionDetail: '',
            showLoader: false,
            errorState: false,
            successState: false
        };
        this.handleSelect = this.handleSelect.bind(this)
        this.resolutionDetail = this.resolutionDetail.bind(this)
    }

    handleSelect(key) {
        this.setState({activeTab: key});
    }

    activeList = id => {
        console.log("list id", id);
        // this.setState({activeList: true});
        actionListing.map((list) => {
            if (list.id == id) {
                this.setState({
                    // activeListId: id,
                    activeList: list,
                    activeBtn: true
                }, () => {

                });
            }
        })
    };
    resolutionDetail = (event) => {
        this.setState({resolutionDetail: event.target.value}, () => {
        });
        let characterCount = this.state.resolutionDetail.length;

    }
    takeAction = () => {
        this.setState({
            showLoader: true
        }, () => {
            setTimeout(() => {
                this.setState({showLoader: false})
            }, 1000);
        });
        setTimeout(() => {
            if (this.state.resolutionDetail == '' || this.state.resolutionDetail.length < 300) {
                this.setState({errorState: true});
                alert('hello');
            } else {
                this.setState({successState: true});
            }
        }, 1500);

    }
    isActionTaken = () => {
        return <ActionTaken/>
    }

    // componentDidMount() {
    //     setTimeout(() => {
    //         this.takeAction();
    //     }, 3000);
    // }

    render() {
        return (
            <React.Fragment>
                {this.state.showLoader ? (
                    <Modal show className="common-modal" aria-labelledby="contained-modal-title-vcenter" centered>
                        <Modal.Body>
                            <div className="loader-div">
                                <div className="loader"></div>
                            </div>
                        </Modal.Body>
                    </Modal>
                ) : (
                    <Modal className="common-modal" size="lg" aria-labelledby="contained-modal-title-vcenter"
                           centered
                           show={this.props.show} onHide={this.props.hide}>
                        <Modal.Header closeButton/>
                        {this.state.errorState ? (
                            <Modal.Body>
                                <div className="text-center">
                                    <h2 className="heading2 text-uppercase color-primary3">ACTION not BEEN TAKEN!</h2>
                                    <p>You can see the action details from details tab.</p>
                                </div>
                            </Modal.Body>
                        ) : ''}
                        {this.state.successState ? (
                            <Modal.Body>
                                <div className="text-center">
                                    <h2 className="heading2 text-uppercase color-primary3">ACTION BEEN TAKEN!</h2>
                                    <p>You can see the action details from details tab.</p>
                                </div>
                            </Modal.Body>
                        ) : ''}
                        {!this.state.errorState && !this.state.successState ? (
                            <Modal.Body>
                                <MyTabs actionTabs activeKey={this.state.activeTab} onSelect={this.handleSelect} id="action-tab"
                                      className="mb-4 justify-content-center">
                                    <Tab eventKey={1} title="1 SELECT ACTION">

                                        <div className="actionListing">
                                            {actionListing.map((list, i) => {
                                                return (
                                                    <div key={i}
                                                         className={"actionList" + (list.id == this.state.activeList.id ? ' selected ' : ' ')}
                                                         onClick={() => this.activeList(list.id)}>
                                                        <p className="actionList__title"><b>{list.title}</b></p>
                                                        <p className="actionList__text">{list.content}</p>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <div className="text-center">
                                            <Button className="customBtn" variant="secondary"
                                                    onClick={() => this.handleSelect(2)}
                                                    disabled={this.state.activeBtn == false}>Next</Button>
                                        </div>
                                    </Tab>
                                    <Tab eventKey={2} title="2 TAKE ACTION" disabled={this.state.activeBtn == false}>
                                        <div className="mb-4">
                                            <p className="mb-1"><b>{this.state.activeList.title}</b></p>
                                            <p className="mb-1">{this.state.activeList.content}</p>
                                        </div>
                                        <Form.Group>
                                            <Form.Label>Resolution Detail*</Form.Label>
                                            <Form.Control maxLength="300" value={this.state.resolutionDetail}
                                                          onChange={this.resolutionDetail}
                                                          placeholder="Enter resolution detail…" as="textarea"
                                                          rows="3"/>
                                        </Form.Group>
                                        <p className="text-right">
                                            <small>{this.state.resolutionDetail.length}/300</small></p>
                                        <ul className="list-inline text-center mb-0">
                                            <li className="list-inline-item mb-1">
                                                <Button className="customBtn" variant="primary"
                                                        onClick={() => this.handleSelect(1)}>Back</Button>
                                            </li>
                                            <li className="list-inline-item mb-1">
                                                <Button className="customBtn" variant="secondary"
                                                        onClick={() => this.takeAction()}>Take Action</Button>
                                            </li>
                                        </ul>
                                    </Tab>
                                </MyTabs>
                            </Modal.Body>
                        ) : ''}
                    </Modal>
                )}
            </React.Fragment>
        )
    }
}

export default TakeAction


