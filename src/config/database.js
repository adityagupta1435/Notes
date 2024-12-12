const mongoose = require("mongoose");

async function connectDB() {
  await mongoose.connect(
    "mongodb+srv://adityagupta:adityagupta@notes.lmfgn.mongodb.net/"
  );
}

module.exports = { connectDB };
