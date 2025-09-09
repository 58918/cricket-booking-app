const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

let bookings = [];

app.post("/book", (req, res) => {
  const { name, players, hours } = req.body || {};
  if (!name || !players || !hours) {
    return res.status(400).json({ ok: false, message: "Missing fields" });
  }
  const time = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
  const booking = { name, players, hours, time };
  bookings.push(booking);
  res.json({ ok: true, booking });
});

app.get("/bookings", (req, res) => {
  res.json(bookings);
});

// Basic health check
app.get("/health", (_req, res) => res.json({ ok: true }));

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
