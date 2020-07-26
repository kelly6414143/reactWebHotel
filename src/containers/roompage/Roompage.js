import React from 'react'
import api from '../../apis/api'

const RoompageConainer = (WrappedComponent) => class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            room: [],
            booking: []
        }
    }

    onChangeRoomType=(el)=>{
        sessionStorage.setItem('roomId', el.id)
        this.onFetchRoomInfo()
    }

    onFetchRoomInfo = ()=>{
        api.room.getSingleRoom(
            { id: sessionStorage.roomId })
            .then((res) => {
                const { success, room, booking } = res.data
                if (success) {
                    this.setState({
                        room: room,
                        booking: booking
                    })
                }
            })
    }

    componentDidMount() {
        const { location, history } = this.props
        const roomType = location.pathname.split('/roomInfo/').join("")
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

        // api.room.getSingleRoom(
        //     { id: sessionStorage.roomId })
        //     .then((res) => {
        //         const { success, room, booking } = res.data
        //         if (success) {
        //             this.setState({
        //                 room: room,
        //                 booking: booking,
        //                 allRooms:parseAllRooms
        //
        //             })
        //         }
        //     })
    }

    render() {
        return (
            <WrappedComponent
                onChangeRoomType={this.onChangeRoomType}
                {...this.state}
                {...this.props}
            />
        )
    }
}

export default RoompageConainer
