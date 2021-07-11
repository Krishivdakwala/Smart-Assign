// Calendar.js return a page with calendar that is to be linked to /calendar


import React from "react";
import LeftDrawer from "../components/LeftDrawer";
import { Container, Card } from "react-bootstrap";
import FullCalendar from '@fullcalendar/react';// must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import './Calendar.css';

export default function calendar() {
    return(
        <>
        
            <div>
                
            <LeftDrawer />
            </div>
            <Container
            className="d-flex flex-wrap align-items-center justify-content-center"
            style={{ minHeight: "85vh"}}
            >
            <Card  className="styles.cal" bsPrefix="cal">
            <FullCalendar className="calen"
                plugins={[ dayGridPlugin ]}
                initialView="dayGridMonth"
                />
            </Card>            
                </Container>

        </>
    );
}
