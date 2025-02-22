import React, { useState, useEffect } from "react";

export default function App() {
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    fetch("https://monster-codex-backend.onrender.com/monsters")
      .then(async (res) => {
        console.log("Raw response:", res); // Log full response object
        const text = await res.text(); // Read response as text first
        console.log("Raw response text:", text); // Log raw text
        return JSON.parse(text); // Now try to parse JSON
      })
      .then((data) => {
        console.log("Parsed JSON:", data); // Log parsed JSON
        setMonsters(data);
      })
      .catch((error) => console.error("Error fetching monsters:", error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-6">D&D Monsters</h1>
      <div className="max-w-lg mx-auto">
        {monsters.map((monster) => (
          <div key={monster.id} className="bg-gray-800 p-4 rounded-lg mb-4">
            <h2 className="text-xl">{monster.name}</h2>
            <p>Armor Class: {monster.armor_class}</p>
            <p>Health: {monster.health}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
