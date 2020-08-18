import React, { useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'


import { Navbar } from '../ui/Navbar'
import { messages } from '../../helpers/calendar-messages-es';
import { CalendarEvent } from './CalendarEvent';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/locale/es';
import { CalendarModal } from './CalendarModal';
moment.locale('es');

const localizer = momentLocalizer(moment);
const events = [{
    title:'Cumpleños del Jefe',
    start:moment().toDate(),
    end: moment().add(2,'hours').toDate(),
    bgcolor:'#fafafa',
    notes:'Comprar el Pastel',
    user:{
        _id:'123',
        name:'Fernando'
    }
    } 
]

export const CalendarScreen = () => {

    const [lastView, setlastView] = useState(localStorage.getItem('lastView : ')|| 'month');
    
    //give double click in the note
    const onDoubleClick =(e) =>{
        console.log(e);
    }

    //give select in the note
    const onSelectEvent =(e) =>{
        console.log(e);
    } 
    
    //view change in the note
    const onViewChange =(e) =>{
        setlastView(e);
        localStorage.setItem('lastView : ', e);
    } 

    const eneventStyleGetter =(event,start,end,isSelect)=>{
       
        //console.log(event,start,end,isSelect);

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
                onDoubleClickEvent={onDoubleClick}
                onSelectEvent={onSelectEvent}
                onView={onViewChange}
                view={lastView}
                components={{
                    event:CalendarEvent
                }}
                />

                <CalendarModal/>
        </div>
        )
}
