import React from 'react';
import './Team.css'; // Assuming you have a separate CSS file for styling

const Team = () => {
  // Replace these with actual image URLs
  const teamPhotoUrl = 'https://th.bing.com/th/id/OIP.32p84Had45HUbz7Keu0odAHaE8?w=279&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7';
  const players = [
    { name: 'Strakosha', imageUrl: 'https://www.bing.com/th?id=OIP.DjfCwXoqN7ubpvUFc6Ob3AAAAA&w=125&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' },
    { name: 'Rota', imageUrl: 'https://www.bing.com/th?id=OIP.OrVhDOXJor9cX8-43-Mh8QHaE4&w=174&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' },
    { name: 'Vida', imageUrl: 'https://www.bing.com/th?id=OIP.kTfmQW6rwuyYa6G9Xm2oegHaEA&w=180&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' },
    { name: 'Moukoundi', imageUrl: 'https://www.bing.com/th?id=OIP.imy13VM-fBtGigfYW2SBFwHaHa&w=171&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' },
    { name: 'Pilios', imageUrl: 'https://th.bing.com/th/id/OIP.Mei9TKDg09AujoVaCXnbqQHaHa?w=159&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { name: 'Eliasson', imageUrl: 'https://www.bing.com/th?id=OIP.2Pg2hUSNKfewFdojOSJhmQHaEA&w=182&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' },
    { name: 'Pineda', imageUrl: 'https://www.bing.com/th?id=OIP.e8OAH9xRbehcXkD9HXg5RAHaE7&w=197&h=131&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' },
    { name: 'Simanski', imageUrl: 'https://th.bing.com/th/id/OIP.vQH2-vD1wWWNfFmUrXhf5QHaD4?w=305&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { name: 'Gacinovic', imageUrl: 'https://www.bing.com/th?id=OIP.6BXW2qDLVV7qzkMI0zZ6JQHaEc&w=175&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' },
    { name: 'Lamela', imageUrl: 'https://www.bing.com/th?id=OIP.tDQpHBI_z_Toc7GvYvT9lAHaEK&w=177&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' },
    { name: 'Garcia', imageUrl: 'https://www.bing.com/th?id=OIP.JFmM6mBDsZT8_C3FmPvDGwHaDf&w=197&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' },
  ];

  return (
    <div className="team-container">
      <div className="team-photo">
        <h2>Team and Staff</h2>
        <img src={"https://th.bing.com/th/id/OIP.32p84Had45HUbz7Keu0odAHaE8?w=279&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7"} alt="Team and Staff" />
      </div>

      <div className="starting-eleven">
        <h2>Starting Eleven</h2>
        <div className="formation">
          {players.map((player, index) => (
            <div key={index} className={`player player-${index + 1}`}>
              <img src={player.imageUrl} alt={player.name} />
              <p>{player.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;

