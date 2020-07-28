import React from 'react';
import { Link } from 'react-router-dom'

const RoomListComponent = (props) => {
    const {
        allRooms,
        onChangeRoomType,
        room
    } = props
    return (
        <div className="roompage_info_right_top">
            {
                allRooms && allRooms.length > 0 ?
                    allRooms.map(el => {
                        if (room.length > 0) {
                            if (el.id !== room[0].id) {
                                return (
                                    <Link
                                        to={`/roomInfo/${el.name}`}
                                        key={el.id}
                                        onClick={() => onChangeRoomType(
                                            el)}>
                                        <h4>{el.name.split(
                                            '_').join(' ')}</h4>
                                    </Link>
                                )
                            }
                        }

                        return false
                    }) :
                    false
            }
        </div>
    )
}

export default RoomListComponent;
