// client/src/pages/Login.jsx
const Login = () => {
  const handleLogin = () => {
    window.location.href = 'https://spotifywebparty.onrender.com/login'; // your actual backend
  };

  return (
    <div className="p-8 text-center">
      <h1 className="text-2xl mb-4 font-bold">Spotify Web Party</h1>
      <button className="p-4 bg-green-500 text-white rounded" onClick={handleLogin}>
        Login with Spotify
      </button>
    </div>
  );
};

export default Login;
