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
    testingHistory: Array[(Date, Boolean)],
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
    testingHistory: Array[(Date, Boolean)],
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
