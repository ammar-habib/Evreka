import React from 'react';
import {Modal} from "react-bootstrap";
import CheckIcon from "../../assets/img/check.svg"
import CloseIcon from "../../assets/img/close.svg"



const ActionTaken = ({setOpenTakeActionModal, showLoader, showActionError, showActionSuccess}) => {
    const handleCloseModal = () => setOpenTakeActionModal(false);
    return (
        <Modal className="common-modal alertModal" aria-labelledby="contained-modal-title-vcenter" centered show
               onHide={handleCloseModal}>
            {showActionError || showActionSuccess ? (
                 <Modal.Header closeButton/>
                ):''
            }
            <Modal.Body>
                {showLoader ? (
                    <div className="text-center">
                        <div className="text-center">
                            <div className="loader"></div>
                        </div>
                    </div>

                ) : (
                    <>
                        {showActionError ? (
                            <div className="text-center">
                                <img src={CloseIcon} className="mb-2" alt="close-icon"/>
                                <h2 className="heading2 text-uppercase text-danger">A PROBLEM OCCURED!</h2>
                                <p>We cannot continue due to a problem. Please try again later.</p>
                            </div>
                        ) : (
                            <div className="text-center">
                                <div className="text-center">
                                    <img src={CheckIcon} className="mb-2" alt="check-icon"/>
                                </div>
                                <h2 className="heading2 text-uppercase color-primary3">ACTION HAS BEEN TAKEN!</h2>
                                <p>You can see the action details from details tab.</p>
                            </div>

                        )}
                    </>
                )}
            </Modal.Body>
        </Modal>
    )

}

export default ActionTaken


