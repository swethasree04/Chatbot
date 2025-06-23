const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/chat", async (req, res) => {
  const userMessage = req.body.message.toLowerCase(); // lowercase for easy matching
  let botReply = "I'm not sure how to respond to that yet.";

  // Simple keyword-based response logic
  if (userMessage.includes("background")) {
    botReply = "I'm Swetha Sree, a web developer passionate about MERN stack, AI, and solving real-world problems.";
  } else if (userMessage.includes("skills")) {
    botReply = "My skills include HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and AI tools.";
  } else if (userMessage.includes("projects")) {
    botReply = "I've worked on a chatbot app, weather forecast app, portfolio website, and a movie search tool.";
  } else if (userMessage.includes("contact")) {
    botReply = "You can contact me via email at swethanehru04@gmail.com or on LinkedIn.";
  }

  res.json({ reply: botReply });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Mock chatbot server running on port ${PORT}`);
});
