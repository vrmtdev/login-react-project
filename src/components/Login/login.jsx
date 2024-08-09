import {
  FaUser,
  FaEyeSlash,
  FaEye,
  FaGoogle,
  FaFacebookF,
} from "react-icons/fa";
import { useState } from "react";
import "./login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email = ${username} | Senha = ${password}`);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Login de usuário</h1>
        <div className="input-field">
          <input
            type="email"
            placeholder="E-mail"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <FaUser className="icon" />
        </div>
        <div className="input-field">
          <input
            type={passwordVisible ? "text" : "password"}
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
            id="pswrd"
          />
          <span
            onClick={togglePasswordVisibility}
            className="eyeicon"
            id="myEyeIcon"
          >
            {passwordVisible ? <FaEye /> : <FaEyeSlash />}
          </span>
        </div>
        <div className="recall-forget">
          <label htmlFor="">
            <input type="checkbox" />
            Lembre de mim
          </label>
          <a href="#">Esqueci minha senha</a>
        </div>
        <button className="enter">Entrar</button>
        <div className="signup-link">
          <a href="#">Crie uma conta</a>
          <p> Entre usando:</p>
        </div>
        <div className="alternative-login">
          <button>
            <FaGoogle className="icon" /> Google
          </button>
          <button>
            <FaFacebookF className="icon" /> Facebook
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
