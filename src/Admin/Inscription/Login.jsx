export const Login = () => {
    return <div className="content_inscription w-full flex justify-center items-center h-screen ">
    <div className="w-[600px] bg-[#fff] p-4 ">
    <div className="title">
        <h1 className="text-center font-bold text-4xl shadow-2xl rounded-[10px] text-[rgb(19,43,78)]">Se connecter </h1>
    </div>
    <form action="" className="incription-form p-2 ">
      
          <div className="mb-3  w-full">
            <label htmlFor="passworld" className="block w-full">Mot de passe</label>
            <input type="text" name="passworld" id="passworld" className="w-full p-2"
             placeholder="Mot de passe"  />
          </div>
        
        <div className="mb-3">
            <label htmlFor="email" className="block w-full">Email</label>
            <input type="email" name="email" id="email" className="w-full p-2"
             placeholder="Email" />
        </div>
        <div className="mb-3">
            <button className="w-full p-2 bg-[rgb(19,43,78)] text-white font-bold cursor-pointer btn">Se connecter</button>
        </div>
       <p className="text-center mt-2 text-black">Vous n'avez pas de compte ? <span className="text-[rgb(19,43,78)] cursor-pointer">Inscrivez-vous</span></p>
    </form>

    </div>
</div>;
}