import React, { useState, useEffect } from 'react';
import ClearIcon from '@material-ui/icons/Clear';


const Dialog = (props) => {
    const { isShow, onClose } = props

    // const onCloseDialog = () => {
    //     setIsShow(false)
    // }

    return (
        <div className={isShow ? "dialog" : "dialog_none"} onClick={onClose}>
            <div className="dialog_boxwrapper">
                {props.children}
                <span className="dialog_boxwrapper_closebtn" onClick={onClose}><ClearIcon/></span>
            </div>
        </div>
    )
}

export default Dialog;