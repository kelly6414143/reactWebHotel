import React from 'react';
import RoompageConainer from '../../containers/roompage/Roompage'
import '../../style/roompage.scss'

const Roompage = (props) => {
    console.log(props)
    return (
        <div className="roompage">
            <div className="roompage_wrapper">
                <h2>WHITE INN</h2>
            </div>
            <div className="roompage_info">
                <div className="roompage_info_left"></div>
                <div className="roompage_info_right"></div>
            </div>
        </div>
    )

}


export default RoompageConainer(Roompage)
