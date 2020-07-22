import React from 'react'
import api from '../../apis/api'

const RoompageConainer = (WrappedComponent) => class extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            room: [],
            booking: []
        }
    }

    componentDidMount () {
        api.room.getSingleRoom(
            { id: '3Elqe8kfMxdZv5xFLV4OUeN6jhmxIvQSTyj4eTgIowfIRvF4rerA2Nuegzc2Rgwu' })
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

    render () {
        return (
            <WrappedComponent { ...this.state } { ...this.props } />
        )
    }
}

export default RoompageConainer
