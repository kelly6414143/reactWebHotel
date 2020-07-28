import App from './App'
import Homepage from './components/homepage/Homepage';

const routeConfig = [
    {
        path:'/',
        component: App,
        indexRoute: { component: Homepage },
    }
]

export default routeConfig;