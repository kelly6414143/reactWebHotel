import App from './App'
import Homepage from './components/homepage/Homepage';
import Roompage from './components/roompage/Roompage';

const routeConfig = [
    {
        path:'/',
        component: Homepage,
    },
    {
        path:"/roomInfo/:type",
        component:Roompage
    }
]

export default routeConfig;
