import { useRef, useState } from "react";
import { MdCloudUpload } from "react-icons/md";
import ReactDOM from "react-dom"


export const AddLivraison = ({onAddLivraison}) => {

    const [showForm, setShowForm] = useState(false)

    const titleRef = useRef()
    const descRef = useRef()
    const imgRef = useRef()

    const handleSubmitForm = (e) => {
        e.preventDefault()

        const newLivraison =  {
            nom: "Saliou",
            date: new Date().toLocaleString(),
            description: descRef.current.value,
            title: titleRef.current.value,
            images: [...imgRef.current.files],
            like: 0,
            dislike: 0
        }

        onAddLivraison(newLivraison)
        setShowForm(false)
        console.log("livarison envoye", newLivraison)
    }



    return <div>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded" onClick={() => setShowForm(true)}>Envoyer une livraison</button>

        {showForm && <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
                <form
                    onSubmit={handleSubmitForm}
                    className="bg-white p-6 rounded-lg shadow-lg w-96 space-y-4"
                >
                    <h2 className="text-xl text-black font-semibold text-center">Nouvelle Livraison</h2>
                    <input
                    type="text"
                    placeholder="Titre"
                    ref={titleRef}
                    className="w-full text-black outline-none border px-3 py-2 rounded"
                    required
                    />
                    <textarea
                    placeholder="Description"
                    ref={descRef}
                    className="w-full text-black outline-none border px-3 py-2 rounded"
                    required
                    />
                    <input
                    type="file"
                    ref={imgRef}
                    multiple
                    accept="image/*"
                    className="w-full border px-4 py-3 rounded text-black outline-none"
                    required
                        />
                    <div className="flex justify-between">
                    <button
                        type="submit"
                        className="bg-green-500 text-white px-4 py-2 rounded"
                    >
                        Confirmer
                    </button>
                    <button
                        type="button"
                        onClick={() => setShowForm(false)}
                        className="bg-red-500 text-white px-4 py-2 rounded"
                    >
                        Annuler
                    </button>
                    </div>
                </form>
        </div>}
    </div>
}