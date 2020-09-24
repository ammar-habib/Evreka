import React, {Component} from 'react';
import {Button, Modal, Tab, Tabs, Form} from "react-bootstrap";


class ActionTaken extends React.Component {
    render() {
        return (
            <Modal className="common-modal" size="lg" aria-labelledby="contained-modal-title-vcenter" centered
                   show={this.props.show} onHide={this.props.hide}>
                <Modal.Header closeButton/>
                <Modal.Body>
                    <div className="text-center">
                        <h2 className="heading2 text-uppercase color-primary3">ACTION HAS BEEN TAKEN!</h2>
                        <p>You can see the action details from details tab.</p>
                    </div>
                </Modal.Body>
            </Modal>
        )
    }
}

export default ActionTaken


