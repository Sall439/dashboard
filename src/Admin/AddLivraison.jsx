import { MdCloudUpload } from "react-icons/md";
export const AddLivraison = () => {
    return <div className="flex flex-col justify-center items-center gap-4 w-full mt-5 text-[#fff] livraison h-screen">
        <h1 className="text-center font-bold text-4xl">Add Livraison</h1>
        <form action="" className="w-1/2">
            <div className="mb-3">
                <label htmlFor="Users"> Utilisateurs </label>
                <input type="text" placeholder="Users" id="Users" className="w-full border-2 p-2"/>
            </div>
            <div className="mb-3">
                <label htmlFor="titre">Titre de l'image</label>
                <input type="text" placeholder="titre image" id="titre" className="w-full border-2 p-2"/>
            </div>
            <div className="mb-3">

                <label htmlFor="desc">Description</label>
                <textarea name="desc" id="desc" cols="30" rows="6" className="w-full border-2 p-2 rounded text-xl font-bold" placeholder="Description"></textarea>
            </div>
            <div className="mb-3">
                <h1 className=" mb-5 font-bold text-xl">telecharger image</h1>
                <label htmlFor="img" className=" w-full border-2 p-4 upload cursor-pointer flex justify-center"><MdCloudUpload className="text-6xl" title="Telecharger une image"/></label>
                <input type="file" id="img" placeholder="Users" className="w-full border-2 p-2 hidden"/>
            </div>
             <div className="flex justify-center">
               <button className="bg-[rgb(19,43,78)] p-4 text-white font-bold w-full text-2xl">Envoyer</button>
             </div>
        </form>
    </div>;
}