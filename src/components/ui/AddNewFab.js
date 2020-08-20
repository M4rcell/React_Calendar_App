
import React from 'react'
import { uiOpenModal } from '../../actions/ui';
import { useDispatch } from 'react-redux';

export const AddNewFab = () => {

    const dispatch = useDispatch();
    
    const handleclickButton = () => {
        dispatch(uiOpenModal());
    }

    return (
        <button
          className="btn btn-primary fab"
          onClick={handleclickButton}
        >
            <i className="fas fa-plus"> </i>
        </button>
    )
}
