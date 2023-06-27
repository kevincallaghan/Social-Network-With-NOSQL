const usersSeeds = [
  {
    username: "Kevin",
    email: "kevin@email.com",
    thoughts: [],
    friends: []
  },
  {
    username: "John",
    email: "john@email.com",
    thoughts: [],
    friends: []
  }
];

const thoughtsSeeds = [
  {
    thoughtText: "This is Thought 1",
    username: "Kevin"
  },
  {
    thoughtText: "This is Thought 2",
    username: "John"
  }
];

module.exports = {usersSeeds, thoughtsSeeds}