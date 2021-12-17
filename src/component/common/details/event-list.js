import React from 'react';
import {Alert, Col, Row} from "react-bootstrap";

const Details = ({details}) => {

    return (
        <Row className="m-0">
            {details.length > 0 ? details?.map((item, index) => (
                <Col key={index} xl="6" className="mb-3">
                    <div><b>{item.title}</b></div>
                    <div>{item.value}</div>
                </Col>
            )):(
                <Alert className="w-100" variant="info">No detail is
                    available </Alert>
            )}
        </Row>
    );
}

export default Details;