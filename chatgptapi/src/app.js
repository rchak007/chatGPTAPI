require('dotenv').config();
const API_KEY = process.env.OpenAiKey;

async function fetchData() {
    const response = await fetch("https://api.openai.com/v1/completions", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "text-davinci-003",
            // prompt: "hello, how are you today?"
            prompt: "how many planets are there in solar system?",
            max_tokens: 7
        })
    })
    const data = await response.json()
    console.log(data)
}

fetchData()