const ZombieFighter = (props) => {
    return (
        <>
      <li>
        <img src={props.zombie.img} alt={props.zombie.name} />
        <p>{props.zombie.name}</p>
        <p>Price: {props.zombie.price}</p>
        <p>Strength: {props.zombie.strength}</p>
        <p>Agitlity: {props.zombie.agility}</p>
      </li>
      <button type="submit" >Add</button>
      </>
    );
  };
  
  export default ZombieFighter;
  