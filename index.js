// index.js
import express from "express";
const app = express();

app.get("*", (req, res) => {
  res.redirect("https://brainytree.vercel.app/");
});

app.listen(3000, () => {
  console.log("Redirecting to new site...");
});
