import { useState } from 'react';

const Gurus = () => {

  const [selectedCard, setSelectedCard] = useState();

  const handleCardClick = (cardNumber) => {
    setSelectedCard(cardNumber);
  };
  return (
    <div className="border  p-12 w-full rounded-xl">
      <p className="text-3xl mb-10 text-center font-extrabold">  Select Guru</p>
      <div className=" flex gap-3 ">
        <div className={`flex items-center w-full gap-3 p-4 hover:cursor-pointer  rounded-xl ${selectedCard === 1 ? 'bg-grad text-white ' : ''}`} onClick={() => handleCardClick(1)}>
          <img className="rounded-full" src="https://secure.gravatar.com/avatar/dd28514c9a8cfba334e05f21703be28e?s=60&d=mm&r=g" alt="" />
          <div>
            <p className=" font-bold text-xl">Name</p>
            audio
          </div>
        </div>
        <div className={`flex items-center w-full gap-3 p-4 hover:cursor-pointer  rounded-xl ${selectedCard === 2 ? 'bg-grad text-white ' : ''}`} onClick={() => handleCardClick(2)}>
          <img className="rounded-full" src="https://secure.gravatar.com/avatar/dd28514c9a8cfba334e05f21703be28e?s=60&d=mm&r=g" alt="" />
          <div>
            <p className=" font-bold text-xl">Name</p>
            audio
          </div>
        </div>
        <div className={`flex items-center w-full gap-3 p-4 hover:cursor-pointer  rounded-xl ${selectedCard === 3 ? 'bg-grad text-white ' : ''}`} onClick={() => handleCardClick(3)}>
          <img className="rounded-full" src="https://secure.gravatar.com/avatar/dd28514c9a8cfba334e05f21703be28e?s=60&d=mm&r=g" alt="" />
          <div>
            <p className=" font-bold text-xl">Name</p>
            audio
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gurus