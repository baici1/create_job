import Mock from "mockjs";
const Random = Mock.Random;
let match = {
  "id|1-10": 10,
  name: "@ctitle(3, 5)",
  describe: "@paragraph()",
};
let matchs = [];
for (let i = 1; i <= 6; i++) {
  matchs.push(match);
}
Mock.mock("/api/match", "get", matchs);

let competiondate = {
  "id|1-100": 100,
  time: "@date()",
  title: "@ctitle()",
  describe: "@paragraph()",
  author: "@cname()",
};
let competionsdate = [];
for (let i = 1; i <= 7; i++) {
  competionsdate.push(competiondate);
}
Mock.mock("/api/date", "get", competionsdate);

function matchDetail() {
  return Mock.mock(match);
}
Mock.mock("/api/detail", "post", matchDetail);

let team = {
  id: "@id()",
  "num|1-10": 10,
  time: "@date('MM-dd')",
  name: "@cword(3,5)",
  describe: "@cparagraph(1,3)",
  award: ["@cword(3,5)", "@cword(3,5)", "@cword(3,5)"],
};
let teams = [];

for (let i = 1; i <= 8; i++) {
  teams.push(team);
}
Mock.mock("/api/team", "get", teams);

let stus = [];
let stu = {
  image: Random.image("200x100", "#894FC4", "#FFF", "png", "!"),
  name: "@cname()",
};

for (let i = 1; i <= 8; i++) {
  stus.push(stu);
}
Mock.mock("/api/stu", "get", stus);
