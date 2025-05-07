# 📚 Dictionary API

This lightweight Node.js (Next.js) API endpoint fetches and returns the definition of a given word using the [DictionaryAPI](https://dictionaryapi.dev/). Perfect for integration into bots, dictionary apps, language tools, or personal projects that need quick word definitions!

## 🚀 Features

- ⚡ Simple and fast API endpoint.
- 🔄 Fetches word definitions from a public dictionary API.
- 📦 Built using modern async/await syntax.
- 🔐 Ready to integrate with frontends, Telegram bots, or serverless functions.

## 🛠️ Requirements

- Node.js v14 or higher.
- A Next.js server or any backend supporting API routes (e.g., Vercel, Netlify functions).

## 📡 Usage

1. **Setup**:
   - Create a file under `pages/api/lookup.js` in your Next.js project.
   - Paste the following code:

     ```js
     export default async function handler(req, res) {
       const { word } = req.query;
       const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
       const data = await response.json();
       res.status(200).json(data);
     }
     ```

2. **Run Your Server**:
   ```bash
   npm run dev
   ```

3. **Access the API:**
   - Visit: `http://localhost:3000/?word=example`
   - You’ll receive a response like:
```json
{
  "word": "example",
  "phonetics": [
    {
      "text": "/ɪɡˈzampəl/",
      "audio": "https://lex-audio.useremarkable.com/mp3/example_us_1.mp3"
    }
  ],
  "meanings": [
    {
      "partOfSpeech": "noun",
      "definitions": [
        {
          "definition": "A representative form or pattern.",
          "example": "This painting is a good example of his work."
        }
      ]
    }
  ]
}
```

**📄 Example Response**
```json
{
  "word": "example",
  "phonetics": [
    {
      "text": "/ɪɡˈzampəl/",
      "audio": "https://lex-audio.useremarkable.com/mp3/example_us_1.mp3"
    }
  ],
  "meanings": [
    {
      "partOfSpeech": "noun",
      "definitions": [
        {
          "definition": "A representative form or pattern.",
          "example": "This painting is a good example of his work."
        }
      ]
    }
  ]
}
```

##⚠️ Error Handling

- If the word is not found or the external API is unavailable, the API may return an error response.
- You can add a `try-catch` block to enhance error handling in production:
```js
export default async function handler(req, res) {
  try {
    const { word } = req.query;
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch word definition" });
  }
}
```

##📝 License

This project is licensed under the MIT License – see the [LICENSE](https://github.com/NotFlexCoder/dictionary-api/blob/main/LICENSE) file for details.
