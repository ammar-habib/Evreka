import React, {Component, useState, useEffect} from 'react';
import {Button, Modal, Tab, Tabs, Form} from "react-bootstrap";
import ActionTaken from "../action-taken/action.taken";

const actionListing = [
    {id: 1, title: 'Mark As Resolved', content: 'Mark this event as resolved and enter the details of the resolution.'},
    {id: 2, title: 'Change Asset', content: 'Change the asset with another one.'}
];


const TakeAction = ({show, setOpenActionModal}) => {
    const [activeList, setActiveList] = useState({});
    const [activeTab, setActiveTab] = useState();
    const [textAreaCount, setTextAreaCount] = useState(0);
    const [openTakeActionModal, setOpenTakeActionModal] = useState(false);
    const [showLoader, setShowLoader] = useState(false);
    const [showActionError, setShowActionError] = useState(false);
    const [showActionSuccess, setShowActionSuccess] = useState(false);
    useEffect(
        () => {
            setTimeout(() => setShowLoader(false), 3000);
        },
    )
    // useEffect(() => {
    //     setOpenActionModal(false)
    // }, [setOpenTakeActionModal(true)])

    const getActiveList = (id) => {
        // this.setState({activeList: true});
        actionListing.map((list) => {
            console.log("list", list);
            if (list.id == id) {
                setActiveList(list)
            }
        })
    };
   const moveTakeActionTab = (key) => {
       setActiveTab(key)
    }
    const handleClose = () => setOpenActionModal(false);
    const  actionTaken = () => {
        setOpenTakeActionModal(true)
        setShowLoader(true)
        textAreaCount == "" || textAreaCount.length < 0 ?
            setShowActionError(true) : setShowActionSuccess (true)
    }


    return (
        <React.Fragment>
            <Modal className="common-modal" size="lg" aria-labelledby="contained-modal-title-vcenter" centered
                   show={show} onHide={handleClose}>
                <Modal.Header closeButton/>
                <Modal.Body>
                    <Tabs activeKey={activeTab} onSelect={moveTakeActionTab} id="action-tab"
                          className="customTabs customTabs--action mb-4 justify-content-center">
                        <Tab eventKey={"select action"} title="1 SELECT ACTION">

                            <div className="actionListing">
                                {actionListing.map((list, i) => (
                                    <div key={i} className={`actionList ${list.id == activeList.id ? ' selected ' : ' '}`}
                                         onClick={() => getActiveList(list.id)}>
                                        <p className="actionList__title"><b>{list.title}</b></p>
                                        <p className="actionList__text">{list.content}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="text-center">
                                <Button className="customBtn" variant="secondary" onClick={()=>moveTakeActionTab("take action")} disabled={Object.keys(activeList).length == 0}>Next</Button>
                            </div>
                        </Tab>
                        <Tab eventKey={"take action"} title="2 TAKE ACTION" disabled={Object.keys(activeList).length == 0}>
                            <div className="mb-4">
                                <p className="mb-1"><b>{activeList.title}</b></p>
                                <p className="mb-1">{activeList.content}</p>
                            </div>
                            <Form.Label>Resolution Detail*</Form.Label>
                            <Form.Group className="textareaWrapper">
                                <Form.Control placeholder="Enter resolution detail…" as="textarea" rows="3" maxLength="300" onChange={e => setTextAreaCount(e.target.value.length)}/>
                                <p className="text-right mb-0"><small>({textAreaCount}/300)</small></p>
                            </Form.Group>
                            <ul className="list-inline text-center mb-0">
                                <li className="list-inline-item mb-1">
                                    <Button className="customBtn" variant="primary" onClick={()=>moveTakeActionTab("select action")}>Back</Button>
                                </li>
                                <li className="list-inline-item mb-1">
                                    <Button className="customBtn" variant="secondary" onClick={()=>actionTaken()}>Take Action</Button>
                                </li>
                            </ul>
                        </Tab>
                    </Tabs>
                </Modal.Body>
            </Modal>
            {openTakeActionModal &&
            <ActionTaken
                setOpenTakeActionModal = {setOpenTakeActionModal}
                showLoader = {showLoader}
                showActionError = {showActionError}
                showActionSuccess = {showActionSuccess}
            />
            }
        </React.Fragment>
    )

}

export default TakeAction


