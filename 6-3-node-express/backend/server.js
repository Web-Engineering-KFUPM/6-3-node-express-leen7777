// TODO 1: Import and Create express app instance

// TODO 1: Define server port

// TODO 4: Import and Apply CORS middleware


// TODO 5: Import and apply Morgan middleware


// TODO 6.1: Create root route "/"


// TODO 6.2: Create "/api/quote" route


// TODO 7: Start server using app.listen
import express from "express";
import cors from "cors";
import morgan from "morgan";
import { getRandomQuote } from "./quotes.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.get("/api/quote", (req, res) => {
  const quote = getRandomQuote();
  res.json({ quote });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
