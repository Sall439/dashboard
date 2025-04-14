import React, { useState } from 'react';

const LivraisonCard = ({ livraison }) => {

    const [like ,setLike] = useState(livraison.like)
    const [dislike, setDisLike] = useState(livraison.dislike)

    const handleLike = () => {
        setLike(prev => prev + 1)
    }

    const handleDislike = () => {
        setDisLike(prev => prev - 1)
    }


  return (
    <div className="p-4 border rounded shadow w-full max-w-xl bg-white mt-4">
      <h3 className="text-xl text-center font-bold text-black">{livraison.title}</h3>
      <p className="text-sm text-center text-gray-400">
        Envoyé par {livraison.nom} le {livraison.date}
      </p>
      

      <div className="flex flex-wrap justify-center gap-2 mt-2">
        {livraison.images.map((img, i) => (
          <img
            key={i}
            src={URL.createObjectURL(img)}
            alt={`image-${i}`}
            className="w-24 h-24 object-cover rounded"
          />
        ))}
      </div>
      <p className="text-gray-600 text-center mt-4">{livraison.description}</p>

      <div className="btn flex justify-center items-center mt-4">
        <button className='border w-[100px] bg-green-500 hover:bg-green-800 text-white px-4 py-2 rounded' onClick={handleLike}>👍 {like}</button>
        <button className='border w-[100px] bg-red-500 hover:bg-red-800 text-white px-4 py-2 rounded' onClick={handleDislike}>👎 {dislike}</button>
      </div>
    </div>
    
    
  );
};

export default LivraisonCard;
