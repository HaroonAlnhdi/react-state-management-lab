/* eslint-disable no-unused-vars */
// src/App.jsx

import "./App.css";
import { useState } from "react";
// import ZombieFighter from './zombieFighterss';

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [totalStrength, setTotalStrength] = useState(0);
  const [totalAgility, setTotalAgility] = useState(0);

  const [zombieFighters, setZombieFighters] = useState([
    {
      name: "Survivor",
      price: 12,
      strength: 6,
      agility: 4,
      img: "https://via.placeholder.com/150/92c952",
    },
    {
      name: "Scavenger",
      price: 10,
      strength: 5,
      agility: 5,
      img: "https://via.placeholder.com/150/771796",
    },
    {
      name: "Shadow",
      price: 18,
      strength: 7,
      agility: 8,
      img: "https://via.placeholder.com/150/24f355",
    },
    {
      name: "Tracker",
      price: 14,
      strength: 7,
      agility: 6,
      img: "https://via.placeholder.com/150/d32776",
    },
    {
      name: "Sharpshooter",
      price: 20,
      strength: 6,
      agility: 8,
      img: "https://via.placeholder.com/150/1ee8a4",
    },
    {
      name: "Medic",
      price: 15,
      strength: 5,
      agility: 7,
      img: "https://via.placeholder.com/150/66b7d2",
    },
    {
      name: "Engineer",
      price: 16,
      strength: 6,
      agility: 5,
      img: "https://via.placeholder.com/150/56acb2",
    },
    {
      name: "Brawler",
      price: 11,
      strength: 8,
      agility: 3,
      img: "https://via.placeholder.com/150/8985dc",
    },
    {
      name: "Infiltrator",
      price: 17,
      strength: 5,
      agility: 9,
      img: "https://via.placeholder.com/150/392537",
    },
    {
      name: "Leader",
      price: 22,
      strength: 7,
      agility: 6,
      img: "https://via.placeholder.com/150/602b9e",
    },
  ]);

  const handleAddFighter = (fighter) => {
    if (money >= fighter.price) {
      setTeam([...team, fighter]);
      // set the money
      setMoney(money - fighter.price);

      updateTeamStats([...team, fighter]);
    } else {
      console.log("Not enough money"); // not require =)
    }
  };

  const handleRemoveFighter = (fighter) => {
    const updatedTeam = team.filter((member) => member.name !== fighter.name);

    setTeam(updatedTeam);

    setMoney(money + fighter.price);
    updateTeamStats(updatedTeam);
  };

  const updateTeamStats = (updatedTeam) => {
    //  reduce used to calculate the totoal String , acc = previos number , member = the current member , 0 = the inital value of acc .
    const totalStrength = updatedTeam.reduce(
      (acc, member) => acc + member.strength,
      0
    );
    const totalAgility = updatedTeam.reduce(
      (acc, member) => acc + member.agility,
      0
    );
    setTotalStrength(totalStrength);
    setTotalAgility(totalAgility);
  };

  const ZombieFighter = (props) => {
    return (
      <li>
        <img src={props.zombie.img} alt={props.zombie.name} />
        <p>{props.zombie.name}</p>
        <p>Price: {props.zombie.price}</p>
        <p>Strength: {props.zombie.strength}</p>
        <p>Agility: {props.zombie.agility}</p>
        <button type="button" onClick={() => handleAddFighter(props.zombie)}>
          Add
        </button>
      </li>
    );
  };

  const TeamMember = (props) => {
    return (
      <li>
        <img src={props.member.img} alt={props.member.name} />
        <p>{props.member.name}</p>
        <p>Price: {props.member.price}</p>
        <p>Strength: {props.member.strength}</p>
        <p>Agility: {props.member.agility}</p>
        <button type="button" onClick={() => handleRemoveFighter(props.member)}>
          {" "}
          Remove{" "}
        </button>
      </li>
    );
  };

  return (
    <>
      <h1>Zombie Fighters</h1>

      <h2>
        {money === 0 ? (
          <p style={{ color: "red" }}>Money: You don't have any money</p>
        ) : (
          `Money: ${money}`
        )}
      </h2>

      <h2>Total Team Strength: {totalStrength} </h2>
      <h2>Total Team Agility: {totalAgility} </h2>

      <h3>Team</h3>
      <ul>
        {team.length === 0 ? (
          <p>Pick some team members!</p>
        ) : (
          team.map((member) => <TeamMember key={member.name} member={member} />)
        )}
      </ul>

      <h3>Fighters</h3>
      <ul>
        {zombieFighters.map((zombie) => (
          <ZombieFighter key={zombie.name} zombie={zombie} />
        ))}
      </ul>
    </>
  );
};
export default App;
