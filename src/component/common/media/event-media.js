import React from 'react';
import {Alert} from "react-bootstrap";

const EventMedia = ({mediaDetail}) => {
    return (
        <>
            {mediaDetail.length > 0 ? mediaDetail?.map((item, index) => (
                item.type === "image" ? (
                    <div key={index} className="imgDiv mediaImg">
                        <img src={item.url} className="img-fluid imgDiv__img"/>
                    </div>
                ) : (
                    <div className="text-center">
                        <audio controls>
                            <source src={item.url}/>
                            Your browser does not support the audio element.
                        </audio>
                    </div>
                )
            )) : (
                <Alert className="w-100" variant="info">No Media Available</Alert>
            )}
        </>
    );
}

export default EventMedia;