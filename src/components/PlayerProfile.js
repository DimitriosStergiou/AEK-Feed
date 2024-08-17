import React from 'react';

const PlayerProfile = ({ player }) => (
  <div>
    <h3>{player.name}</h3>
    <p>Position: {player.position}</p>
    <p>Number: {player.number}</p>
    <img src={player.imageUrl} alt={player.name} />
  </div>
);

export default PlayerProfile;
