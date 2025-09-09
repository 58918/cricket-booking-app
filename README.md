# Cricket Ground Booking (On-the-spot)

A tiny Node.js + Express app with a simple HTML front-end to log on-the-spot bookings at your cricket ground.

## What it does
- Watchman types **name**, **number of players**, and **hours**, then taps **Book Now**.
- The list updates instantly and shows **totals** (players and hours).
- Designed for phones—create a home screen shortcut for quick access.
- Data is kept **in memory** (clears when the server restarts). For permanent storage, add a database later.

---

## 1) Run on your own laptop (quickest)
1. Install Node.js from https://nodejs.org/
2. Extract this folder, then open a terminal **in this folder**.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the server:
   ```bash
   npm start
   ```
5. On your laptop browser, open:
   - http://localhost:3000

### Let the watchman use it on the same Wi‑Fi
1. Find your laptop’s IP address on the network:
   - **Windows**: open Command Prompt, run `ipconfig` → look for **IPv4 Address** (e.g. `192.168.1.23`).
   - **Mac**: System Settings → Network → Wi‑Fi → IP (or run `ifconfig|grep inet` in Terminal).
2. On the watchman’s phone (connected to the same Wi‑Fi), open:
   - `http://YOUR_LAPTOP_IP:3000`
   - Example: `http://192.168.1.23:3000`
3. In Chrome on the phone: tap **⋮** → **Add to Home screen** → now it behaves like an app.

> If it doesn’t open, ensure any firewall allows connections on **port 3000** (or temporarily turn it off).

---

## 2) Put it online (so he can use it from anywhere)
You can deploy this to any Node.js host (Render, Railway, Fly.io, a small VPS, etc.).
- Make sure the platform exposes the port via the `PORT` env variable—this app already uses `process.env.PORT`.
- Set the **Start command** to:
  ```
  node server.js
  ```
- After deployment, you’ll get a public URL (e.g. `https://your-app.onrender.com`). Share that link with your watchman on WhatsApp.

---

## 3) Daily usage instructions for the watchman
1. Open the link (or the home screen shortcut).
2. For each group:
   - Type **Name** (team or person),
   - Enter **Number of Players**, **Hours**,
   - Tap **Book Now**.
3. Verify the entry appears under **Today’s Bookings**. Totals update automatically.
4. Keep the page open during the day. It auto-refreshes every 10 seconds.

**Clearing the list**: Restart the server (`Ctrl+C` then `npm start`)—the list resets.  
(For permanent history or a daily reset button, we can add a small database and admin page later.)

---

## Troubleshooting
- **Page doesn’t load on phone**: Check that both laptop and phone are on the same Wi‑Fi, and use the laptop’s correct IP + `:3000`.
- **Cannot connect**: Windows Firewall may be blocking port 3000—allow Node.js or temporarily disable the firewall to test.
- **Data disappeared**: The server was restarted. Add a database later if you need permanent records.

---

## Next steps (optional improvements)
- Add an **admin pin** and a **daily reset** button.
- Save bookings to **SQLite** (local file) so data is not lost.
- Show **total revenue** by hour (add a “price per hour” field).
