// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.
const PlayerAPI = {
  players: [
    { number: 1, name: "Ben Blocker", position: "G" },
    { number: 2, name: "Dave Defender", position: "D" },
    { number: 3, name: "Sam Sweeper", position: "D" },
    { number: 4, name: "Matt Midfielder", position: "M" },
    { number: 5, name: "William Winger", position: "M" },
    { number: 6, name: "Fillipe Forward", position: "F" },
    { number: 7, name: "Ben Blocker", position: "F" },
    { number: 8, name: "Dave Defender", position: "F" },
    { number: 9, name: "Sam Sweeper", position: "F" },
    { number: 10, name: "Matt Midfielder", position: "F" },
    { number: 11, name: "William Winger", position: "F" },
    { number: 12, name: "Fillipe Forward", position: "F" },
    { number: 13, name: "Ben Blocker", position: "F" },
    { number: 14, name: "Dave Defender", position: "F" },
    { number: 15, name: "Sam Sweeper", position: "F" },
    { number: 16, name: "Matt Midfielder", position: "F" }
  ],
  all: function() { return this.players},
  get: function(id) {
    const isPlayer = p => p.number === id
    return this.players.find(isPlayer)
  }
}

export default PlayerAPI