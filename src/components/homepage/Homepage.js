import React from 'react';
import { Link } from 'react-router-dom';
import HomepageConainer from '../../containers/homepage/Homepage'
import '../../style/homepage.scss'

const Homepage = (props) => {
    const { rooms } = props
    console.log(rooms)
    return (
        <div className="homepage">
            <h1>WHITE INN</h1>
            <div className="homepage_footer">
                <div className="homepage_roomcarousel">
                    {
                        rooms.map((el) => {
                            const trimRoomName = el.name.split(" ").join("")
                            return (<Link to={`/roomInfo/${trimRoomName}`} key={el.id} className="homepage_roomcarousel_roomcard">
                                <div className="homepage_roomcarousel_imgwrapper" style={{ backgroundImage: `url(${el.imageUrl})` }}></div>
                                <div className="homepage_roomcarousel_roominfo">
                                    <h3>{el.name}</h3>
                                    <p>$ {el.normalDayPrice}</p>
                                    <p>$ {el.holidayPrice}</p>
                                </div>
                            </Link>
                            )
                        }
                        )
                    }
                </div>
                <div className="homepage_webinfo">
                    <p>台北市ＯＯ區ＯＯ街123號</p>
                    <p>12345-6789</p>
                    <p>abcd@efghijk.com</p>
                </div>
            </div>
        </div>
    )
}


export default HomepageConainer(Homepage)