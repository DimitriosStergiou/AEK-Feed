import React from 'react';
import PlayerProfile from './PlayerProfile';

const Team = ({ team }) => (
  <div>
    <h2>Team</h2>
    {team.map(player => (
      <PlayerProfile key={player.id} player={player} />
    ))}
  </div>
);

export default Team;
