export default async function handler(req, res) {
  const { word } = req.query;
  const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
  const data = await response.json();
  res.status(200).json(data);
}