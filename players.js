query {
  player(id: 59b11a53) {
    id
    gamerTag
    user {
      id
      username
    }
    sets(perPage: 5) {
      nodes {
        id
        displayScore
        event {
          id
          name
          tournament {
            id
            name
          }
        }
      }
    }
  }
}
const fetchPlayerData = async (playerId) => {
  const response = await fetch('https://api.start.gg/gql/alpha', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer edb4cde66f5304afce211a16a2f021e0',
    },
    body: JSON.stringify({
      query: `
        query {
          player(id: ${playerId}) {
            id
            gamerTag
            user {
              id
              username
            }
            sets(perPage: 5) {
              nodes {
                id
                displayScore
                event {
                  id
                  name
                  tournament {
                    id
                    name
                  }
                }
              }
            }
          }
        }
      `,
    }),
  });

  const data = await response.json();
  return data.data.player;
};
console.log(data);

const players = [
  {
  name: "Command",
  stats: {
    
  "JBell",
  "RebelGalaxy",
  "Sol",
  "CurryGovernor",
"MiniMo",
"Lyto",
"TRINITY",
"AirborneArcher",
"MTF DOOM",
"redux",
"phone",
"Ledgeslippin' Jimmy",
"Jacky",
"Loopy",
"Sonch",
"merricat",
"Viridian",
"benrikko",
"Dwayne The Rock Johnson",
"Curious",
"HobHunks",
"TaleOfTheToaster",
"Toragarasu",
"Piper",
"Olsamli",
"Matteus",
"Ktulu",
"ToxicScorp",
"doombelle!",
"MudkiperPlays",
"Padgriffin",
"rtg",
"Oatmeal",
"Ethan",
"BigBoy9000",
"Dea1hmark",
"Empress of Kashyr",
"NiceTomato"
];

window.onload = function () { 
const input = document.getElementById('searchInput');
const resultsDiv = document.getElementById('results');
input.addEventListener('input', () => {
const query = input.value.toLowerCase().trim();
if (!query) {
  resultsDiv.innerHTML = '';
  return;
}
const filtered = players.filter(player => player.toLowerCase().includes(query));
if (filtered.length === 0) {
  resultsDiv.innerHTML = "<p>No results. Are you sure you're in the right region?</p>";
} else {
  resultsDiv.innerHTML = filtered.map(player => `<p>${player}</p>`).join('');
}
});
};
  
  
