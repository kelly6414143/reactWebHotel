import React from 'react'
import api from '../../apis/api'

const RoompageConainer = (WrappedComponent) => class extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            room: [],
            booking: [],
            imageArr: [],
            isShowReserveDialog: false,
            isShowLoading: false,
            isShowImageDialog: false,
            isShowCheckinDatePicker: false,
            isShowCheckoutDatePicker: false,
            imageUrl: ''
        }
    }

    onChangeRoomType = (el) => {
        sessionStorage.setItem('roomId', el.id)
        this.onFetchRoomInfo()
    }

    onFetchRoomInfo = () => {
        this.setState({
            isShowLoading: true
        })
        api.room.getSingleRoom(
            { id: sessionStorage.roomId })
            .then((res) => {
                const { success, room, booking } = res.data
                if (success) {
                    this.setState({
                        room: room,
                        booking: booking,
                        imageArr: room[ 0 ].imageUrl,
                        isShowLoading: false
                    })
                }
            })
    }

    onChangeArrangement = (e) => {
        e.stopPropagation()
        const { imageArr } = this.state
        const newImageArr = []
        for (let i = 0; i < imageArr.length; i++) {
            if (i < imageArr.length - 1) {
                newImageArr[ i ] = imageArr[ i + 1 ]
            } else {
                newImageArr[ i ] = imageArr[ 0 ]
            }
        }
        this.setState({
            imageArr: newImageArr
        })
    }

    onShowReserveDialog = () => {
        this.setState({
            isShowReserveDialog: true
        })
    }

    onCloseReserveDialog = () => {
        this.setState({
            isShowReserveDialog: false
        })
    }

    onShowImageDialog = (el) => {
        this.setState({
            isShowImageDialog: true,
            imageUrl: el
        })
    }

    onCloseImageDialog = () => {
        this.setState({
            isShowImageDialog: false
        })
    }

    onShowCheckinDatePicker = () => {

        console.log('gerg')

        this.setState({
            isShowCheckinDatePicker: true
        })
    }

    onCloseCheckinDatePicker = () => {
        this.setState({
            isShowCheckinDatePicker: false
        })
    }

    onShowCheckoutDatePicker = () => {

        this.setState({
            isShowCheckoutDatePicker: true
        })
    }

    componentDidMount () {
        const { location, history } = this.props
        const roomType = location.pathname.split('/roomInfo/').join('')
        if (!sessionStorage.allRooms) return history.push('/')
        const parseAllRooms = JSON.parse(sessionStorage.allRooms)

        const realUrl = parseAllRooms.filter(el => {
            if (el.name === roomType) {
                sessionStorage.setItem('roomId', el.id)
                return true
            }
            return false
        })

        if (realUrl.length < 1) {
            history.push('/')
        }

        this.setState({
            allRooms: parseAllRooms
        })

        this.onFetchRoomInfo()
    }

    render () {
        return (
            <WrappedComponent
                onChangeRoomType={ this.onChangeRoomType }
                onChangeArrangement={ this.onChangeArrangement }
                onShowReserveDialog={ this.onShowReserveDialog }
                onCloseReserveDialog={ this.onCloseReserveDialog }
                onShowImageDialog={ this.onShowImageDialog }
                onCloseImageDialog={ this.onCloseImageDialog }
                onShowCheckinDatePicker={ this.onShowCheckinDatePicker }
                onShowCheckoutDatePicker={ this.onShowCheckoutDatePicker }
                onCloseCheckinDatePicker={ this.onCloseCheckinDatePicker }{ ...this.state } { ...this.props }
            />
        )
    }
}

export default RoompageConainer
