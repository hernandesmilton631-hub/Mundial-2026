export default async function handler(req, res) {
  const response = await fetch('https://v3.football.api-sports.io/fixtures?live=all', {
    headers: {
      'x-rapidapi-key': process.env.API_KEY,
      'x-rapidapi-host': 'v3.football.api-sports.io'
    }
  });
  const data = await response.json();
  res.status(200).json(data);
}