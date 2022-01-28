import { Link } from 'react-router-dom'
import Logo from '../components/logo'

function Header() {

    return (
    <nav className="mx-auto w-full">
        <div className='p-1 md:p-2 lg:p-3 bg-verde h-14 flex justify-center'>      
           <Link to='/'><Logo className='h-32 w-32 '/></Link>
        </div>
    </nav>
)}
  
export default Header