import styled, {css} from 'styled-components'
import {Button, Tabs} from "react-bootstrap";


const colorPrimary = '#172C49';
const colorPrimary2 = '#535A72';
const colorPrimary3 = '#3BA935';
const colorPrimary4 = '#E9CF30';
const colorPrimary5 = '#EBECEF';
const colorPrimary6 = '#454F63';


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

export const Btn = styled(Button)`
    text-align: center;
    font: normal normal bold 16px/22px Open Sans;
    letter-spacing: 0;
    color: ${colorPrimary};
    text-transform: uppercase;
    border-radius: 4px;
    box-shadow: 0 3px 6px #00000029;
    min-width: 124px;
    background: transparent; 
    border: 1px solid ${colorPrimary};
    ${props => props.variant === 'primary' && css`
     background: ${colorPrimary}; 
     border: 1px solid ${colorPrimary};
     color: #ffffff;`}
    
     ${props => props.variant === 'secondary' && css`
     background: ${colorPrimary3}; 
     border: 1px solid ${colorPrimary3};
     color: #ffffff;`}
     
    &:hover, &:focus{
     background: ${colorPrimary}; 
     border: 1px solid ${colorPrimary};
     color: #ffffff;
     
    ${props => props.variant === 'primary' && css`
     background: #ffffff; 
     border: 1px solid ${colorPrimary};
     color: ${colorPrimary}`}

     ${props => props.variant === 'secondary' && css`
     background: #ffffff;; 
     border: 1px solid ${colorPrimary3};
     color: ${colorPrimary3}`}
    }
    // @media (max-width: 575px) {
    // margin-bottom: 8px;
    //}
`;

export const MyTabs = styled(Tabs)`
    border-bottom: 2px solid ${colorPrimary6};
    & > .nav-link {
    font: normal normal bold ${props => props.actionTabs ? " 19px/26px " : "16px/18px"} Open Sans;
    letter-spacing: 0;
    color: ${colorPrimary6};
    opacity: 0.2;
    border-radius: 0;
    border-width: 0 0 3px 0;
    border-style: solid;
    border-color: transparent transparent transparent transparent;
     ${props => props.actionTabs && css`
      &:not(:last-child){
       margin-right: 2.5rem;}`
}
    &.active {
    color: ${colorPrimary6};
    opacity: 1;
    background-color: #fff;
    border-color: transparent transparent ${colorPrimary3} transparent;}
    }
    & > .nav-item.show{
       .nav-link{
        color: ${colorPrimary6};
        opacity: 1;
       background-color: #fff;
        border-color: transparent transparent ${colorPrimary3} transparent;}
    }
`
