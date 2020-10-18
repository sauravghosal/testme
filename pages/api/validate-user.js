// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const users = [
  {
    name: "Saurav Ghosal",
    username: "sghosal",
    email: "sghosal@gatech.edu",
    password: "georgiaTech",
    gtid: "900456784",
    phone: "(321)-567-8902",
    sex: "Male",
    race: "Asian American",
    birthday: "10-10-1",
    residence: "Fulton Hall",
    testingHistory: [
      { date: new Date("10/1/2020"), result: 0 },
      { date: new Date("10/5/2020"), result: 1 },
      { date: new Date("10/8/2020"), result: 0 },
      { date: new Date("10/10/2020"), result: 1 },
      { date: new Date("10/17/2020"), result: 2 },
      { date: new Date("10/30/2020"), result: 1 },
    ],
  },
  {
    name: "Saurav Ghosal",
    username: "paulinaschuler",
    email: "sghosal@gatech.edu",
    password: "hello",
    gtid: "900456784",
    phone: "(321)-567-8902",
    sex: "Male",
    race: "Asian American",
    birthday: "10-10-1",
    residence: "Fulton Hall",
    testingHistory: [
      { date: new Date("10/1/2020"), result: 0 },
      { date: new Date("10/5/2020"), result: 1 },
      { date: new Date("10/8/2020"), result: 0 },
      { date: new Date("10/10/2020"), result: 1 },
      { date: new Date("10/17/2020"), result: 2 },
      { date: new Date("10/30/2020"), result: 1 },
    ],
  },
];

export default (req, res) => {
  if (req.method == "POST") {
    const user = users.find(
      (user) =>
        user.username === req.body.username &&
        user.password == req.body.password
    );
    if (typeof user === "undefined") {
      return res.status(400).send({ message: "User not found" });
    }
    res.statusCode = 202;
    res.json(user);
  }
};
