//api.js
import {req} from './https';

const api={
    room:{
        getRooms(){
            return req('rooms','get')
        },
        getSingleRoom(param){
            return req(`room/${param.id}`,'get')
        },
        addGuest(params){
            return req('post','/guest',params)
        }
    }
}

export default api
