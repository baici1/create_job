import Mock from "mockjs";
// const Random = Mock.Random;
let match = {
  id: "@id()",
  name: "@ctitle(3, 5)",
};
let matchs = [];
for (let i = 1; i <= 6; i++) {
  matchs.push(match);
}

let competiondate = {
  id: "@id()",
  time: "@date('MM-dd')",
  name: "@cparagraph(1,3)",
};
let competionsdate = [];
for (let i = 1; i <= 7; i++) {
  competionsdate.push(competiondate);
}

let team = {
  id: "@id()",
  "num|1-10": 10,
  time: "@date('MM-dd')",
  name: "@cword(3,5)",
  describe: "@cparagraph(1,3)",
};
let teams = [];
for (let i = 1; i <= 8; i++) {
  teams.push(team);
}

Mock.mock("/api/match", "get", matchs);
Mock.mock("/api/date", "get", competionsdate);
Mock.mock("/api/team", "get", teams);
