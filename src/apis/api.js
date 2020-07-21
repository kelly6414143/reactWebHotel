//api.js
import {req} from './https';

const api={
    room:{
        getRooms(){
            return req('rooms','get')
        },
        // addGuest(params){
        //     return req('post','/guest',params)
        // }
    }
}

export default api