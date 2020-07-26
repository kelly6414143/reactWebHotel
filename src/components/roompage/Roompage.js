import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import RoompageConainer from '../../containers/roompage/Roompage'

const roomType = {
    'Single': '單人床',
    'Double': '雙人床',
    'Small Double': '豪華單人床',
    'Queen': '豪華雙人床'
}

const Roompage = (props) => {
    const { allRooms, room } = props
    // const [ roomInfo, setRoomInfo ] = useState([])
    const [ images, setImages ] = useState([])

    // useEffect(() => {
    //     const { room } = props
    //     if (room.length > 0) {
    //         setRoomInfo(room)
    //     }
    // })
    //
    useEffect(() => {
        if (room.length > 0) {
            setImages(room[ 0 ].imageUrl)
        }
    })

    const RoomListComponent = () => {
        return (
            <div className="roompage_info_right_top">
                {
                    allRooms && allRooms.length > 0 ?
                        allRooms.map(el => {
                            if (room.length > 0) {
                                if (el.id !== room[ 0 ].id) {
                                    return (
                                        <Link
                                            to={ `/roomInfo/${ el.name }` }
                                            key={ el.id }
                                            onClick={ () => props.onChangeRoomType(
                                                el) }>
                                            <h4>{ el.name.split(
                                                '_').join(' ') }</h4>
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

    const RoomPriceContentComponent = () =>
        <div className="roompage_info_right_middle_top">
            <h3>{ room.length > 0 && room[ 0 ].name }</h3>
            <div className="roompage_info_right_middle_price">
                <div>平日(一~四)價格：<span>{ room.length > 0 &&
                room[ 0 ].normalDayPrice }</span></div>
                <div>假日(五~日)價格：<span>{ room.length > 0 &&
                room[ 0 ].holidayPrice }</span></div>
            </div>
        </div>

    const ImageCarouselComponent = () =>
        <>
            <div className="roompage_info_left_largeimage" style={ { backgroundImage: `url(${ images[ 0 ] })` } }></div>
            <div className="roompage_info_left_smallimages">
                <div className="roompage_info_left_smallimages_image" style={ { backgroundImage: `url(${ images[ 1 ] })` } }></div>
                <div className="roompage_info_left_smallimages_image" style={ { backgroundImage: `url(${ images[ 2 ] })` } }></div>
            </div>
        </>
    const RoomDescriComponent = () =>
        <div className="roompage_info_right_middle_down_half">
            <div className="roompage_info_right_middle_descri">{ room.length >
            0 && room[ 0 ].description }</div>
            <div className="roompage_info_right_middle_detail">
                <p>房客人數限制：{ room.length >
                0 && room[ 0 ].descriptionShort.GuestMin } - { room.length >
                0 && room[ 0 ].descriptionShort.GuestMax } 人</p>
                <p>床型：{ roomType[ room.length >
                0 && room[ 0 ].descriptionShort.Bed[ 0 ] ] }</p>
                <p>衛浴數量：{ room.length >
                0 && room[ 0 ].descriptionShort[ 'Private-Bath' ] } 間</p>
                <p>房間大小：{ room.length >
                0 && room[ 0 ].descriptionShort.Footage } 平方公尺</p>
                <p>checkIn 時間：{ room.length >
                0 && room[ 0 ].checkInAndOut.checkInEarly } ~ { room.length >
                0 && room[ 0 ].checkInAndOut.checkInLate }</p>
                <p>checkOut 時間：{ room.length >
                0 && room[ 0 ].checkInAndOut.checkOut }</p>
            </div>
        </div>

    const RoomReservationComponent = () =>
        <div className="roompage_info_right_middle_down_half">
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Phone" />
            <div className="roompage_info_right_middle_formDate">
                <input type="text" placeholder="Check in" />
                <input type="text" placeholder="Check out" />
            </div>
            <div className="roompage_info_right_middle_formButton">
                <div></div>
                <div>
                    <button>預約</button>
                </div>
            </div>

        </div>

    console.log(room)
    return (
        <div className="roompage">
            <div className="roompage_wrapper">
                <div className="roompage_info">
                    <div className="roompage_info_left">
                        <Link to={ '/' }><h2>WHITE INN</h2></Link>
                        <ImageCarouselComponent />
                    </div>
                    <div className="roompage_info_right">
                        <RoomListComponent />
                        <div className="roompage_info_right_middle">
                            <RoomPriceContentComponent />
                            <div className="roompage_info_right_middle_down">
                                <RoomDescriComponent />
                                <RoomReservationComponent />
                            </div>
                        </div>
                        <div className="roompage_info_right_down">
                            {
                                Object.keys(room.length > 0 && room[ 0 ].amenities).map((el)=>{
                                    console.log(el, room[ 0 ].amenities[el])
                                    return(
                                        <div key={el} className="roompage_info_right_down_item">
                                            <input type="checkbox" checked={ room[ 0 ].amenities[el]}/><span>{el}</span>
                                        </div>

                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default RoompageConainer(Roompage)
