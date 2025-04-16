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
      className="text-white px-4 py-2 text-sm"
    >
      Se déconnecter
    </button>
  );
};

export default Deconnexion;
