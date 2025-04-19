import { useNavigate } from "react-router-dom";

const Deconnexion = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role"); // si tu stockes le rôle
    navigate("/login");
  };

  return (
    <button
      onClick={handleLogout}
      className="text-white px-4 py-2 text-sm cursor-pointer font-bold rounded-md hover:bg-gray-600"
    >
      Se déconnecter
    </button>
  );
};

export default Deconnexion;




