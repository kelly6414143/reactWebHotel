import React from 'react';


const RoomPriceContentComponent = (props) => {
    const { room } = props
    return (
        <div className="roompage_info_right_middle_top">
            <h3>{room.length > 0 && room[0].name}</h3>
            <div className="roompage_info_right_middle_price">
                <div>平日(一~四)價格：<span>{room.length > 0 &&
                    room[0].normalDayPrice}</span></div>
                <div>假日(五~日)價格：<span>{room.length > 0 &&
                    room[0].holidayPrice}</span></div>
            </div>
        </div>
    )

}

export default RoomPriceContentComponent;