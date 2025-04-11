import "./Inscription.css"
export const Inscription = () => {
    return <div className="content_inscription w-full flex justify-center items-center h-screen ">
        <div className="w-[600px] bg-[#fff] p-4 ">
        <div className="title">
            <h1 className="text-center font-bold text-4xl shadow-2xl rounded-[10px] text-[rgb(19,43,78)]">Inscrivez-vous </h1>
        </div>
        <form action="" className="incription-form p-2">
            <div className="flex gap-4 w-full ">
              <div className="mb-3 w-full">
                <label htmlFor="nom" className="block w-full">Nom</label>
                <input type="text" name="name" id="nom" className="w-full p-2" placeholder="Nom"/>
              </div>
              <div className="mb-3 w-full">
                <label htmlFor="prenom" className="block w-full">Prenom</label>
                <input type="text" name="prenom" id="prenom" className="w-full p-2" placeholder="Prenom"/>
              </div>

            </div>
            <div className="flex gap-4 w-full">
              <div className="mb-3  w-full">
                <label htmlFor="passworld" className="block w-full">Mot de passe</label>
                <input type="text" name="passworld" id="passworld" className="w-full p-2" placeholder="Mot de passe"/>
              </div>
              <div className="mb-3 w-full">
                <label htmlFor="passworld" className="block w-full">Confirmer mot de passe</label>
                <input type="password" name="passworld" id="passworld" className="w-full p-2" placeholder="confirmer le mot de passe"/>
              </div>

            </div>
            <div className="mb-3">
                <label htmlFor="email" className="block w-full">Email</label>
                <input type="email" name="email" id="email" className="w-full p-2" placeholder="Email"/>
            </div>
            <div className="mb-3">
                <button className="w-full p-2 bg-[rgb(19,43,78)] text-white font-bold cursor-pointer btn">S'inscrire</button>
            </div>
           
        </form>

        </div>
    </div>;
}