import React from 'react';
import api from '../../apis/api'

const HomepageConainer = (WrappedComponent) => class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            rooms: []
        }
    }

    componentWillMount() {
        api.room.getRooms().then((res) => {
            const { success,items } = res.data
            const allRooms = items.map(el=>{
                return {name:el.name.split(' ').join('_'), id:el.id}
            })
            sessionStorage.setItem('allRooms', JSON.stringify(allRooms))
            if (success) {
                if (items && items.length > 0) {
                    this.setState({
                        rooms:items
                    })
                }
            }
        })
    }


    render() {
        return (
            <WrappedComponent {...this.state} {...this.props} />
        )
    }
}

export default HomepageConainer;