require("dotenv").config();

const mongoose = require("mongoose");

const dbCon = async () => {
  //realizar la conexión con la base de datos
  await mongoose.connect(
    "mongodb+srv://nachtorrejon23:5vwSRfw3QwmE856I@prueba.8rdy7tg.mongodb.net/Prueba"
  );
};

module.exports = dbCon;
