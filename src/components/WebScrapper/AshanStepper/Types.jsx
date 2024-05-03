import { useState } from 'react';

const Types = () => {
  const [selectedCard, setSelectedCard] = useState();

  const handleCardClick = (cardNumber) => {
    setSelectedCard(cardNumber);
  };
  return (
    <div className="border p-[68px] rounded-xl w-full ">
      <p className="  text-3xl mb-10 text-center font-extrabold  ">Choose Type</p>
      <div className="flex justify-center items-center   ">

        <div className="flex gap-2 font-bold">
          <div className={`card border border-gray-300 rounded-xl text-xl text-nowrap p-20  cursor-pointer ${selectedCard === 1 ? 'bg-grad  text-white shadow-2xl' : ''}`}
            onClick={() => handleCardClick(1)}
          >
            Card 1
          </div>
          <div className={`card border border-gray-300 rounded-xl text-xl text-nowrap p-20 cursor-pointer ${selectedCard === 2 ? 'bg-grad  text-white shadow-2xl' : ''}`}
            onClick={() => handleCardClick(2)}
          >
            Card 2
          </div>
          <div className={`card border border-gray-300 rounded-xl text-xl text-nowrap p-20 cursor-pointer ${selectedCard === 3 ? 'bg-grad text-white shadow-2xl' : ''}`}
            onClick={() => handleCardClick(3)}
          >
            Card 3
          </div>
        </div>
      </div>
    </div>
  )
}

export default Types