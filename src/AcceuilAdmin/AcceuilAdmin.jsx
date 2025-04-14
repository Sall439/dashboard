import "./acceuil.css" 
export const AcceuilAdmin = () => {
    return <div className="flex justify-between p-6 items-center gap-10 w-full flex-wrap acceuiladmin">
        <div className="flex-auto  bg-[#fff] p-10 text-center box shadow-2xl">
            <h1 className="text-center text-3xl text-[#333]">Utilisateurs</h1>
            <span className="text-3xl text-center text-[#333]">10</span>
        </div>
        <div className="flex-auto  bg-[#fff] p-10 text-center box shadow-2xl">
            <h1 className="text-center text-2xl text-[#333]">Taches</h1>
            <span className="text-3xl text-center text-[#333]">10</span>
        </div>
        <div className="flex-auto  bg-[#fff] p-10 text-center box shadow-2xl">
            <h1 className="text-center text-2xl text-[#333]">Programmes</h1>
            <span className="text-2xl text-center text-[#333]">10</span>
        </div>
    </div>;
}