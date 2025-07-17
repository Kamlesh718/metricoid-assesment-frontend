import { useEffect } from "react";
import profileImage from "./assets/profile.png";
import { useState } from "react";

function App() {
  const [card, setCard] = useState([]);

  const fetchCards = async () => {
    const res = await fetch("http://localhost:3000/card"); //Locally
    // const res = await fetch("https://metricoid-assesment-backend.onrender.com/card"); //Hosted on render
    const data = await res.json();
    setCard(data);
    console.log(data);
  };

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <div className="flex flex-col gap-4 items-center justify-start min-h-[90vh] pt-10 overflow-y-auto">
      {card.map((card) => (
        <div
          key={card._id}
          className="flex flex-col gap-5 w-[450px] min-h-[200px] p-3 bg-white/80 rounded-lg justify-center"
        >
          <div className="flex gap-2 items-center">
            <img src={profileImage} alt="Profile Image" className="w-12 h-12" />
            <div className="flex justify-between w-full items-center">
              <div className="flex flex-col ">
                <h1 className="font-bold text-lg">{card.name}</h1>
                <span className="text-sm">{card.job}</span>
              </div>
              <span className="text-gray-400">Followed</span>
            </div>
          </div>
          <p className="text-gray-400">{card.about}</p>
          <div className="flex justify-between">
            <span className="text-gray-800 font-medium">
              📚 {card.noOfTask} Tasks
            </span>
            <span className="text-gray-800 font-medium">
              ⭐ 4.9 ({card.noOfRatings} Reviews)
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
