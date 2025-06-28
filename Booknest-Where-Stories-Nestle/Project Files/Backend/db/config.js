const mongoose = require('mongoose');
require('dotenv').config(); // ✅ Load environment variables from .env

const DB_URL = process.env.DB_URL;

console.log("Connecting to:", DB_URL); // 🧪 Debug check

mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("✅ MongoDB connected successfully!");
})
.catch((err) => {
  console.error("❌ MongoDB connection failed:", err.message);
});
