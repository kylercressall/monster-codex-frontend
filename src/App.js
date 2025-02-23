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
    <div>
      <h1>D&D Monsters</h1>
      <div
        className="max-w-lg mx-auto"
        style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}
      >
        {monsters.map((monster) => (
          <div
            key={monster.id}
            className="Monster-block"
            style={{
              backgroundColor: "#61dafb",
              marginTop: "15px",
              width: "30%",
            }}
          >
            <h2 className="Name-text">{monster.name}</h2>
            <img
              src={monster.photo_url}
              alt={monster.name}
              style={{
                objectFit: "cover",
                width: "230px",
                height: "230px",
                margin: "20px auto",
                display: "block",
              }}
            />
            <p>Armor Class: {monster.armor_class}</p>
            <p>Health: {monster.health}</p>
            <p>Speed: {monster.speed}</p>
            <p>Challenge Rating: {monster.challenge_rating}</p>
            <div
              className="stats"
              style={{
                display: "flex",
                gap: "15px",
                padding: "10px",
                background: "50% 50%",
              }}
            >
              <p>Str {monster.strength}</p>
              <p>Dex {monster.dexterity}</p>
              <p>Con {monster.constitution}</p>
              <p>Int {monster.constitution}</p>
              <p>Wis {monster.constitution}</p>
              <p>Cha {monster.constitution}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
