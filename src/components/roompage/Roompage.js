import React,{useState, useEffect} from 'react';
import RoompageConainer from '../../containers/roompage/Roompage'

const Roompage = (props) => {
    // const [room, setRoom] = useState([])
    const[imageOne, setImageOne] = useState("")

    useEffect(()=>{
        console.log(props)

        if(props.room.length>0){
            setImageOne(props.room[0].imageUrl[0])
        }
        // setRoom(props.room)
    },[])

    // useEffect(()=>{
    //     console.log(props)
       // if(room.length>0){
       //     setImageOne(room[0].imageUrl[0])
       // }
    // })


    return (
        <div className="roompage">
            <div className="roompage_wrapper">
                <h2>WHITE INN</h2>
            </div>
            <div className="roompage_info">
                <div className="roompage_info_left">
                    <div style={ { backgroundImage: `url(${ imageOne })`} }></div>
                    <div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div className="roompage_info_right"></div>
            </div>
        </div>
    )

}


export default RoompageConainer(Roompage)
