import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Callback = () => {
  const { search } = useLocation();

  useEffect(() => {
    const fetchToken = async () => {
      const res = await fetch(`https://spotifywebparty.onrender.com/callback${search}`);
      const data = await res.json();
      console.log(data); // access_token, etc.
    };
    fetchToken();
  }, [search]);

  return <div className='p-4'>Processing login...</div>;
};

export default Callback;