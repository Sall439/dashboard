import axios from "axios";
import { useEffect, useState } from "react"
import { useContextInscription } from "../Admin/useContext/UseInscription";
import { FaEdit, FaTrash } from "react-icons/fa";

export const ListeUsers = () => {
    const [users, setUsers] = useState([])
    const [filter,setFilter] = useState("")
  const {url} = useContextInscription()


    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem("token");
                const userRes = await axios.get(`${url}/admin/utilisateurs`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setUsers(userRes.data);
            } catch (err) {
                console.error("Erreur de chargement des données :", err);
            }
        };
        fetchData();
    },[])

    console.log(users);
    
// filtrage des utilisateurs
    const filteredUsers = users.filter((user)=>user.nom.toLowerCase().includes(filter.toLowerCase()))

    const handleRoleChange = async (userId, newRole) => {
        const token = localStorage.getItem("token");
        try {
          await axios.put(
            `${url}/admin/users/${userId}/role`,
            { role: newRole },
            { headers: { Authorization: `Bearer ${token}` } }
          );
    
          // mettre à jour localement
          setUsers((prev) =>
            prev.map((user) =>
              user.id === userId ? { ...user, role: newRole } : user
            )
          );
        } catch (err) {
          console.error("Erreur lors de la mise à jour du role :", err);
          alert("Une erreur s'est produite lors de la mise à jour du role.");
        }

        {filteredUsers.length === 0 && alert("Aucun utilisateur trouve")}
      };

      // suppression des utilisateurs
      const handleDeleteUser = async (userId) => {
        const token = localStorage.getItem("token");
        try {
          await axios.delete(`${url}/admin/users/${userId}`, {
            headers: { Authorization: `Bearer ${token}` }
          });
    
          // mettre à jour localement
          setUsers((prev) => prev.filter((user) => user.id !== userId));
        } catch (err) {
          console.error("Erreur lors de la suppression de l'utilisateur :", err);
          alert("Une erreur s'est produite lors de la suppression de l'utilisateur.");
        }
      }
    return <div className="p-8 w-full flex justify-center items-center flex-col gap-3">
      <div className="filter text-center w-[90%] mb-3">
        <input type="search" placeholder="Rechercher un utilisateurs..." className="border-2 w-full p-2 rounded-2xl outline-0"
         value={filter} onChange={(e) => setFilter(e.target.value)}/>
      </div>
        <table className="w-full border border-collapse">
        <thead>
            <tr>
                <th className="border border-collapse p-2">ID</th>
                <th className="border border-collapse p-2">Nom</th>
                <th className="border border-collapse p-2">Prenom</th>
                <th className="border border-collapse p-2">Email</th>
                <th className="border border-collapse p-2">Role</th>
                <th className="border border-collapse p-2">Actions</th>
            </tr>
        </thead>
        <tbody>
         {filteredUsers.map((user,index)=>{
            return <tr key={user.id}>
                <td className="border border-collapse p-2 truncate max-w-[100px] sm:max-w-[200px] md:max-w-[300px]">{index+1}</td>
                <td className="border border-collapse p-2 truncate max-w-[100px] sm:max-w-[200px] md:max-w-[300px]">{user.nom}</td>
                <td className="border border-collapse p-2 truncate max-w-[100px] sm:max-w-[200px] md:max-w-[300px]">{user.prenom}</td>
                <td className="border border-collapse p-2 truncate max-w-[100px] sm:max-w-[200px] md:max-w-[300px]">{user.email}</td>
                <td className="border border-collapse p-2 truncate max-w-[100px] sm:max-w-[200px] md:max-w-[300px]">
                  
                 <select
                  value={user.role}
                  onChange={(e) => handleRoleChange(user.id, e.target.value)}
                  className="p-1 border rounded"
                >
                  <option value="user" className="text-black">user</option>
                  <option value="admin" className="text-black">admin</option>
                </select>
                 </td>

                 <td className="border border-collapse p-2 truncate max-w-[100px] sm:max-w-[200px] md:max-w-[300px] flex items-center justify-center">
                  <button className="text-2xl cursor-pointer" title="supprimer" onClick={() => handleDeleteUser(user.id)}><FaTrash /></button>
                  {/* <button className="text-2xl cursor-pointer" title="modifier"><FaEdit /></button> */}
                 </td>
            </tr>
         })}
        </tbody>
            
    </table>
        </div>
}