
require("dotenv").config();

const express = require("express");
const OpenAI = require("openai");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Validate API key configuration
if (!process.env.OPENAI_API_KEY) {
  console.error("Error: OPENAI_API_KEY is missing from backend/.env");
  process.exit(1);
}

// Initialize OpenAI client
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Health-check endpoint
app.get("/api/health", (req, res) => {
  res.json({
    status: "success",
    message: "Model-Meter backend is running",
  });
});

// OpenAI chat endpoint
app.post("/api/chat", async (req, res) => {
  try {
    const { prompt } = req.body;

    // Validate prompt
    if (typeof prompt !== "string" || !prompt.trim()) {
      return res.status(400).json({
        error: "Please provide a valid prompt.",
      });
    }

    // Send prompt to OpenAI
    const response = await client.responses.create({
      model: "gpt-5.5",
      input: prompt.trim(),
    });

    // Return answer and token usage
    res.json({
      answer: response.output_text,
      usage: response.usage,
    });
  } catch (error) {
    console.error("OpenAI request failed:", error.message);

    res.status(500).json({
      error: "Failed to generate a response. Check the backend terminal.",
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Model-Meter backend running at http://localhost:${PORT}`);
});
