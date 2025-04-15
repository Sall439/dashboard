import axios from "axios";
import { useEffect, useState } from "react"

export const ListeUsers = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem("token");
                const userRes = await axios.get("http://localhost:3000/admin/utilisateurs", {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setUsers(userRes.data);
            } catch (err) {
                console.error("Erreur de chargement des données :", err);
            }
        };

        fetchData();
    },[])

    const handleRoleChange = async (userId, newRole) => {
        const token = localStorage.getItem("token");
        try {
          await axios.put(
            `http://localhost:3000/admin/users/${userId}/role`,
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
        }
      };
    return <div className="p-8 w-full flex justify-center items-center">
        <table className="w-full border border-collapse">
        <thead>
            <tr>
                <th className="border border-collapse p-2">ID</th>
                <th className="border border-collapse p-2">Nom</th>
                <th className="border border-collapse p-2">Prenom</th>
                <th className="border border-collapse p-2">Email</th>
                <th className="border border-collapse p-2">Role</th>
            </tr>
        </thead>
        <tbody>
         {users.map((user,index)=>{
            return <tr key={user.id}>
                <td className="border border-collapse p-2">{index+1}</td>
                <td className="border border-collapse p-2">{user.nom}</td>
                <td className="border border-collapse p-2">{user.prenom}</td>
                <td className="border border-collapse p-2">{user.email}</td>
                <td className="border border-collapse p-2">
                  
                 <select
                  value={user.role}
                  onChange={(e) => handleRoleChange(user.id, e.target.value)}
                  className="p-1 border rounded"
                >
                  <option value="user" className="text-black">user</option>
                  <option value="admin" className="text-black">admin</option>
                </select>
                    {/* {user.role} */}
                 </td>
            </tr>
         })}
        </tbody>
            
    </table>
        </div>
}