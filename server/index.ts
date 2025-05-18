import express from 'express';
import axios from 'axios';
import cors from 'cors';
import dotenv from 'dotenv';
import querystring from 'querystring';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8888;
app.use(cors());

const redirect_uri = process.env.REDIRECT_URI;

app.get('/login', (req, res) => {
  const scope = 'user-read-private user-read-email';
  const queryParams = querystring.stringify({
    response_type: 'code',
    client_id: process.env.CLIENT_ID,
    scope,
    redirect_uri,
  });
  res.redirect(`https://accounts.spotify.com/authorize?${queryParams}`);
});

app.get('/callback', async (req, res) => {
  const code = req.query.code || null;
  const payload = querystring.stringify({
    grant_type: 'authorization_code',
    code,
    redirect_uri,
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
  });

  try {
    const response = await axios.post('https://accounts.spotify.com/api/token', payload, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Token exchange failed', details: err.message });
  }
});

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
