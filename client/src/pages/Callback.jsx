// client/src/pages/Callback.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Callback = () => {
  const { search } = useLocation();

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const res = await fetch(`https://spotifywebparty.onrender.com/callback${search}`);
        const data = await res.json();
        console.log("Access Token:", data.access_token);
      } catch (err) {
        console.error("Token exchange failed", err);
      }
    };

    fetchToken();
  }, [search]);

  return <div className="p-4">Processing login with Spotify...</div>;
};

export default Callback;
