import React from 'react'
import { Link } from 'react-router-dom'
import RoompageConainer from '../../containers/roompage/Roompage'
import CheckBoxIcon from '@material-ui/icons/CheckBox'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank'
import Dialog from '../../common/components/Dialog'
import Loading from '../../common/components/Loading'
import RoomReservationComponent from './RoomReservationComponent'
import ImageCarouselComponent from './ImageCarouselComponent'
import RoomPriceContentComponent from './RoomPriceContentComponent'
import RoomDescriComponent from './RoomDescriComponent'
import RoomListComponent from './RoomListComponent'

const weekType = {
    0: '日',
    1: '一',
    2: '二',
    3: '三',
    4: '四',
    5: '五',
    6: '六'
}


const Roompage = (props) => {
    const {
        allRooms,
        room,
        imageUrl,
        isShowReserveDialog,
        isShowLoading,
        isShowImageDialog,
        onChangeRoomType,
        onCloseReserveDialog,
        onCloseImageDialog,
        checkinDay,
        checkoutDay,
        onReservationSubmit
    } = props


    const formatDate = (d) => {
        const date = new Date(d);
        const month = (date.getMonth() + 1) < 10 ? `0${(date.getMonth() + 1)}` : (date.getMonth() + 1)
        const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
        const formatdate = `${date.getFullYear()}/${month}/${day} 星期${weekType[date.getDay()]}`
        return formatdate
    }


    // console.log(room)
    return (
        <>
            <div className="roompage">
                <div className="roompage_wrapper">
                    <div className="roompage_info">
                        <div className="roompage_info_left">
                            <Link to={'/'}><h2>WHITE INN</h2></Link>
                            <ImageCarouselComponent {...props} />
                        </div>
                        <div className="roompage_info_right">
                            <RoomListComponent  {...props} />
                            <div className="roompage_info_right_middle">
                                <RoomPriceContentComponent {...props} />
                                <div className="roompage_info_right_middle_down">
                                    <RoomDescriComponent {...props} />
                                    <RoomReservationComponent {...props} />
                                    {/*{RoomReservationComponent(props)}*/}
                                </div>
                            </div>
                            <div className="roompage_info_right_down">
                                {
                                    Object.keys(
                                        room.length > 0 && room[0].amenities)
                                        .map((el) => {
                                            return (
                                                <div key={el} className="roompage_info_right_down_item">
                                                    {room[0].amenities[el] ?
                                                        <CheckBoxIcon /> :
                                                        <CheckBoxOutlineBlankIcon />}<span>{el}</span>
                                                </div>
                                            )
                                        })
                                }

                            </div>
                        </div>
                    </div>
                </div>
                <Dialog isShow={isShowReserveDialog} onClose={onCloseReserveDialog}>
                    <div className="roompagedialog">
                        <div className="roompagedialog_wrapper">
                            <h3>{room.length > 0 && room[0].name}</h3>
                            <div className="roompagedialog_content">
                                <div className="roompagedialog_content_descri">
                                    <span>入住</span>
                                    <span>{formatDate(checkinDay)}（15:00 起）</span>
                                </div>
                                <div className="roompagedialog_content_descri">
                                    <span>退房</span>
                                    <span>{formatDate(checkoutDay)}（10:00 前）</span>
                                </div>
                            </div>
                            <div className="roompagedialog_total">3 晚 / 4260 元</div>
                        </div>
                        <button onClick={onReservationSubmit}>確定</button>
                    </div>
                </Dialog>
                <Dialog isShow={isShowImageDialog} onClose={onCloseImageDialog}>
                    <div className="roompageimagedialog">
                        <img src={imageUrl}></img>
                    </div>
                </Dialog> <Loading isShow={isShowLoading}></Loading>
            </div>
        </>
    )

}
export default RoompageConainer(Roompage)
