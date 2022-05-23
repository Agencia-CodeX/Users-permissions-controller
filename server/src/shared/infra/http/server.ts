import express from "express";

const app = express();

app.get("/", (request, response) => {
  response.json({ Message: "Ola mundo" });
});

app.listen(3333, () => console.log("Server ON"));
