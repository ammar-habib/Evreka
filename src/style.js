import styled from 'styled-components/macro'

const colorPrimary = '#172C49';
const colorPrimary2 = '#535A72';
const colorPrimary3 = '#3BA935';
const colorPrimary4 = '#E9CF30';
const colorPrimary5 = '#EBECEF';


export const PageWrapper = styled.div`
    display: -ms-flexbox;
    display: flex;
    -ms-flex: 1;
    flex: 1;
    -ms-flex-direction: column;
    flex-direction: column;
    min-height: 100vh;
`;

export const PageContent = styled.div`
    background: #EBECEF;
    padding: 30px 15px 0;
    margin-top: 40px;
`;

export const Heading3 = styled.h3`
     font-size: 23px;
    font-weight: 700;
    color: ${colorPrimary};
`;

export const EventListing = styled.div`
    max-height: 85vh;
    overflow-y: auto;
    margin-left: -15px;
    @media (max-width: 991px) {
       max-height: 60vh;
        overflow-y: auto;
        overflow-x: hidden;
        margin-bottom: 15px;
}
@media (max-width: 575px) {
        max-height: 250px;
}    
`;

export const EventList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-gap: 10px 10px;
    gap: 10px 10px;
    grid-template-areas: ". . . . .";
    margin-bottom: 8px;
    font-size: 13px;
    border-left: 6px solid ${props => props.action ? colorPrimary4 : "transparent"};
    box-shadow: 0 3px 6px #00000029;
    padding: 12.5px 20px;
    cursor: pointer;
    background: ${props => props.selected ? "#FBF5D6" : "#ffffff"};
    &:hover{
    background:#FBF5D6;
    }
    @media (max-width: 575px) {
     display: block;
    }
`;

export const EventListText = styled.div`
     @media (max-width: 575px) {
     margin-bottom: 8px;
    }
`;

export const Button = styled.button`
    text-align: center;
    font: normal normal bold 16px/22px Open Sans;
    letter-spacing: 0;
    color: #FFFFFF;
    text-transform: uppercase;
    border-radius: 4px;
    box-shadow: 0 3px 6px #00000029;
    min-width: 124px;
    background: ${props => props.variant = "primary" ? "#172C49" : "#ffffff"};
    // @media (max-width: 575px) {
    // margin-bottom: 8px;
    //}
`;
