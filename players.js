
const players = [
  "Command",
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
  
  
