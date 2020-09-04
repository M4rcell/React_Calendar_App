import Swal from "sweetalert2";

import { types } from "../types/types";
import { fetchConToken } from "../helpers/fetch";
import { prepareEvents } from "../helpers/prepareEvents";

export const eventStartAddNew =(event)=>{
    return async(dispatch,getState) =>{

        const {uid,name} = getState().auth;//obtener datos desde la storage
        
        try {
        const resp = await fetchConToken('events',event,'POST');
        const body = await resp.json();
        //console.log(body);
          
          if (body.ok) {

              event.id = body.evento.id;
              event.user = {
                  _id:uid,
                  name:name
              } 
            //console.log(event);
            dispatch(eventAddNew(event));

          }
 
        } catch (error) {
            
            console.log(error)
        }

    }
}


const eventAddNew = (event) =>({
   
    type:types.eventAddNew,
    payload:event,

})

export const eventSetActive = (event) =>({
   
    type:types.eventSetActive,
    payload:event,
    
})

export const eventClearActiveEvent = () =>({type:types.eventClearActiveEvent});

export const eventStartUpdate = (event)=>{

    return async(dispatch)=>{
        try {
           // console.log(event);
            const resp = await fetchConToken(`events/${event.id}`,event,'PUT');
            const body = await resp.json();

            if (body.ok) {
                dispatch(eventUpdated(event))
            }else{
                Swal.fire('Error',body.msg,'error');
            }

        } catch (error) {
            console.log(error);
        }

    }

}

const eventUpdated =(event) =>({
   
    type:types.eventUpdated,
    payload:event
}); 

export const eventStartDelete= ()=>{

    return async(dispatch,getState)=>{

        const {id} = getState().calendar.activeEvent;
        //console.log(id);

        try {
           // console.log(event);
            const resp = await fetchConToken(`events/${id}`,{},'DELETE');
            const body = await resp.json();

            if (body.ok) {
                dispatch(eventDelete())
            }else{
                Swal.fire('Error',body.msg,'error');
            }

        } catch (error) {
            console.log(error);
        }

    }    

}

const eventDelete = () =>({type:types.eventDelete});

export const eventStartLoading=()=>{
    return async(dispatch)=> {
      
        try {

            const resp =  await fetchConToken('events');//peticion DB
            const body = await resp.json(); //traer desde db 
            //console.log(body);
            const events = prepareEvents(body.eventos); //convertir los formato string a formato Date
            //console.log(events);

            dispatch(eventLoaded(events))
            
        } catch (error) {
            
            console.log(error);
        }
    }
}

const eventLoaded=(events)=>({
    type:types.eventLoaded,
    payload:events
})

export const eventClearStoreEvent=()=>({
    type:types.eventClearStoreEvent
})