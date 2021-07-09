import Mock from "mockjs";
let match = {
  id: "@id()",
  name: "@ctitle(3, 5)",
};
let matchs = [];
for (let i = 1; i <= 7; i++) {
  matchs.push(match);
}

let competiondate = {
  time: "@datetime()",
  name: "@cword(6)",
};
let competionsdate = [];
for (let i = 1; i <= 7; i++) {
  competionsdate.push(competiondate);
}

let team = {
  num: " @number|1-100",
  time: "@datetime()",
  name: "@cword(6)",
};
let teams = [];
for (let i = 1; i <= 7; i++) {
  teams.push(team);
}

Mock.mock("/api/match", "get", matchs);
Mock.mock("/api/date", "get", competionsdate);
Mock.mock("/api/team", "get", teams);
