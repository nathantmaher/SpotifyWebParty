const Login = () => {
  const handleLogin = () => {
    window.location.href = 'http://localhost:8888/login';
  };
  return <button className='p-4 bg-green-500 text-white rounded'>Login with Spotify</button>;
};

export default Login;