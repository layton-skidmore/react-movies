import SignUpForm from '../../components/SignUpForm/SignUpForm';


export default function LoginPage({ updateUser }) {
  const handleLogin = (username) => {
    updateUser(username);
  };


  return (
    <main>
      <h1>LoginPage</h1>
      <SignUpForm onLogin={handleLogin} />
    </main>
  );
}