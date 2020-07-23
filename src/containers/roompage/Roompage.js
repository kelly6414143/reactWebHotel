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

    componentDidMount() {
        console.log('99999999999999999999999')
        const { location, history } = this.props
        const roomType = location.pathname.split('/roomInfo/').join("")

        const realUrl = JSON.parse(sessionStorage.allRooms).filter(el => {
            if (el.name === roomType) {
                sessionStorage.setItem('roomId', el.id)
                return true
            }
            return false
        })
        console.log(realUrl)
        if (realUrl.length < 1) {
            history.push('/')
        }


        // if (location.query && location.query.id) {
        //     sessionStorage.setItem('roomId', location.query.id)
        // }

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

    render() {
        return (
            <WrappedComponent {...this.state} {...this.props} />
        )
    }
}

export default RoompageConainer
