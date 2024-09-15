const axios = require("axios");

exports.getAffirmation = async (req, res) => {
  const response = await axios.post(
    "https://api.openai.com/v1/completions",
    {
      prompt: "Generate a positive affirmation",
      max_tokens: 50,
      model: "text-davinci-003",
    },
    {
      headers: { Authorization: `Bearer YOUR_API_KEY` },
    }
  );

  res.json({ affirmation: response.data.choices[0].text.trim() });
};
