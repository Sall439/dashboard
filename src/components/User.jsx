import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Main from './Main'
import { Outlet } from 'react-router-dom'
import { useContextInscription } from '../Admin/useContext/UseInscription'
const User = () => {

  const {handleAddLivraison} = useContextInscription()


  return (
    <div className="container w-full p-4">
       <Navbar onAddLivraison ={handleAddLivraison}/>
       <div className='flex'>
       <Sidebar/>
       <Outlet/>
       </div>
      </div>
  )
}

export default User
