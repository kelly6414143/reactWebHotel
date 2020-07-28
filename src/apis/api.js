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
        addRoom(params){
            return req(`room/${params.id}`,'post',params)
        }
    }
}

export default api
