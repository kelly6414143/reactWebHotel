import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RoompageConainer from '../../containers/roompage/Roompage'

const Roompage = (props) => {
    const { allRooms, room } = props
    const [roomInfo, setRoomInfo] = useState([])
    const [images, setImages] = useState([])

    useEffect(() => {
        const { room } = props
        if (room.length > 0) {
            setRoomInfo(room)
        }
    })


    useEffect(() => {
        if (roomInfo.length > 0) {
            setImages(roomInfo[0].imageUrl)
        }
    }, [roomInfo])

    // console.log('99999999999999999999999')
    return (
        <div className="roompage">
            <div className="roompage_wrapper">
                <div className="roompage_info">
                    <div className="roompage_info_left">
                        <Link to={'/'}><h2>WHITE INN</h2></Link>
                        <div className="roompage_info_left_largeimage" style={{ backgroundImage: `url(${images[0]})` }}></div>
                        <div className="roompage_info_left_smallimages">
                            <div className="roompage_info_left_smallimages_image" style={{ backgroundImage: `url(${images[1]})` }}></div>
                            <div className="roompage_info_left_smallimages_image" style={{ backgroundImage: `url(${images[2]})` }}></div>
                        </div>
                    </div>
                    <div className="roompage_info_right">
                        <div className="roompage_info_right_top">
                            {
                                allRooms && allRooms.length > 0 ? allRooms.map(el => {
                                    console.log(el.id, room[0])
                                    if (el.id !== room[0].id) {
                                        return (
                                            <h4 key={el.id}>{el.name.split("_").join(" ")}</h4>
                                        )
                                    }
                                    return false
                                }) : false
                            }
                        </div>
                        <div className="roompage_info_right_middle">
                            
                        </div>
                        <div className="roompage_info_right_down"></div>
                    </div>
                </div>
            </div>
        </div>
    )

}


export default RoompageConainer(Roompage)
