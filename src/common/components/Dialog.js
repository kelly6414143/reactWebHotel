import React, { useState, useEffect } from 'react';


const Dialog = (props) => {
    const { isShow, onClose } = props

    // const onCloseDialog = () => {
    //     setIsShow(false)
    // }

    return (
        <div className={isShow ? "dialog" : "dialog_none"} onClick={onClose}>
            <div className="dialog_boxwrapper">
                {props.children}
            </div>
        </div>
    )
}

export default Dialog;