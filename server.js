const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { Configuration, OpenAIApi } = require("openai");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const configuration = new Configuration({
  apiKey: "YOUR_OPENAI_API_KEY", // Replace with your real key
});
const openai = new OpenAIApi(configuration);

app.post("/chat", async (req, res) => {
  const userMessage = req.body.message;

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: "You are a chatbot for Swetha Sree's portfolio. Answer questions about her background, skills, projects, and contact." },
      { role: "user", content: userMessage },
    ],
  });

  const reply = response.data.choices[0].message.content;
  res.json({ reply });
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
