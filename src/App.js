import React, { useState } from "react";

const monstersData = [
  { id: 1, name: "Goblin", upvotes: 5 },
  { id: 2, name: "Dragon", upvotes: 12 },
  { id: 3, name: "Lich", upvotes: 8 },
];

export default function App() {
  const [monsters, setMonsters] = useState(monstersData);

  const handleUpvote = (id) => {
    setMonsters(
      monsters.map((monster) =>
        monster.id === id
          ? { ...monster, upvotes: monster.upvotes + 1 }
          : monster
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        D&D Monster Upvote
      </h1>
      <div className="max-w-lg mx-auto">
        {monsters.map((monster) => (
          <div
            key={monster.id}
            className="bg-gray-800 p-4 rounded-lg mb-4 flex justify-between items-center"
          >
            <span className="text-xl">{monster.name}</span>
            <div className="flex items-center">
              <span className="mr-2">{monster.upvotes}</span>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white px-3 py-1 rounded"
                onClick={() => handleUpvote(monster.id)}
              >
                Upvote
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
