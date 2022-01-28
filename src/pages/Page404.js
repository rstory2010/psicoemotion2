import {useLocation} from 'react-router-dom'
export default function Page404() {
    let location = useLocation();  
    return(
        <div>
            <h1 className="text-center text-xl font-bold">Page404 No existe la URL <code>{location.pathname}</code></h1>
        </div>

    )
}
