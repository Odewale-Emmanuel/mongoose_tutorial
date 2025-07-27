const mongoose = require("mongoose");
const User = require("./model/user");

mongoose.connect("mongodb://127.0.0.1:27017/test");

async function main() {
  try {
    const users = await User.find();
    console.log(users);
  } catch (e) {
    console.log(e.message);
  }
}

main();
