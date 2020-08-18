import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'


import { Navbar } from '../ui/Navbar'
import { messages } from '../../helpers/calendar-messages-es';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/locale/es';
moment.locale('es');

const localizer = momentLocalizer(moment);
const events = [{
    title:'Cumpleños del Jefe',
    start:moment().toDate(),
    end: moment().add(2,'hours').toDate(),
    bgcolor:'#fafafa'
    } 
]

export const CalendarScreen = () => {

    const eneventStyleGetter =(event,start,end,isSelect)=>{
       
        console.log(event,start,end,isSelect);

        const style={
            background:'#367cF7',
            borderRadius:'0px',
            opacity:0.8,
            display:'block',
            color:'white'
        }

        return {
            style 
        }
    };

    return (
        <div>
            <div className="calendar-screem">
             <Navbar/>

             <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
                messages={messages}
                eventPropGetter={eneventStyleGetter}
                />
                </div>
        </div>
    )
}
