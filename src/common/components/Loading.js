import React from 'react';
import RoomIcon from '@material-ui/icons/Room';

const Loading = (props)=>{
    const {isShow} = props
    return (
        <div className={isShow ? "loading" : "loading_none"}>
            <div className="loading_boxwrapper">
                <RoomIcon/>Loading
            </div>
        </div>
    )
}

export default Loading;
