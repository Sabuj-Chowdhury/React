import { useState } from "react";

function Team() {
  const [player, setPlayer] = useState(11);

  const teamStyle = {
    border: "2px dotted blue",
    margin: "20px",
    padding: "20px",
    borderRadius: "15px",
  };
  return (
    <div style={teamStyle}>
      <h3>Player : {player} </h3>
      <button
        onClick={() => {
          const newPlayer = player + 1;
          setPlayer(newPlayer);
        }}
      >
        add
      </button>
      <button
        onClick={() => {
          const newplayer = player - 1;
          setPlayer(newplayer);
        }}
      >
        remove
      </button>
    </div>
  );
}
export default Team;
