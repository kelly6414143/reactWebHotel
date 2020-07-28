import React from 'react';


const roomType = {
    'Single': '單人床',
    'Double': '雙人床',
    'Small Double': '豪華單人床',
    'Queen': '豪華雙人床'
}

const RoomDescriComponent = (props) => {
    const {room} = props
    return (
        <div className="roompage_info_right_middle_down_half">
            <div className="roompage_info_right_middle_descri">{room.length >
                0 && room[0].description}</div>
            <div className="roompage_info_right_middle_detail">
                <p>房客人數限制：{room.length >
                    0 && room[0].descriptionShort.GuestMin} - {room.length >
                        0 && room[0].descriptionShort.GuestMax} 人</p>
                <p>床型：{roomType[room.length >
                    0 && room[0].descriptionShort.Bed[0]]}</p>
                <p>衛浴數量：{room.length >
                    0 && room[0].descriptionShort['Private-Bath']} 間</p>
                <p>房間大小：{room.length >
                    0 && room[0].descriptionShort.Footage} 平方公尺</p>
                <p>checkIn 時間：{room.length >
                    0 && room[0].checkInAndOut.checkInEarly} ~ {room.length >
                        0 && room[0].checkInAndOut.checkInLate}</p>
                <p>checkOut 時間：{room.length >
                    0 && room[0].checkInAndOut.checkOut}</p>
            </div>
        </div>
    )
}


export default RoomDescriComponent;