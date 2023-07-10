const { default: mongoose } = require("mongoose");

const DBconnect = async () => {
  {
    try {
      await mongoose.connect("mongodb://127.0.0.1:27017/result");
      console.log("DB connect success");
    } catch (error) {
      console.log("DB connection lost");
    }
  }
};

module.exports = DBconnect;
