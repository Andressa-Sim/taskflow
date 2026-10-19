import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  function entrar(event) {
    event.preventDefault();

    if (!email || !senha) {
      setMensagem("Preencha o e-mail e a senha.");
      return;
    }

    setMensagem("");
    navigate("/dashboard");
  }

  return (
    <main className="login-container">
      <section className="login-card">
        <div className="logo">✓</div>

        <h1>TaskFlow</h1>
        <p className="subtitle">Organize suas tarefas de forma simples</p>

        <form onSubmit={entrar}>
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            placeholder="seuemail@exemplo.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <label htmlFor="senha">Senha</label>
          <input
            id="senha"
            type="password"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(event) => setSenha(event.target.value)}
          />

          <button type="submit">Entrar</button>
        </form>

        {mensagem && <p className="mensagem">{mensagem}</p>}

        <p className="cadastro">
          Ainda não possui uma conta?{" "}
          <Link to="/cadastro">Cadastre-se</Link>
        </p>
      </section>
    </main>
  );
}

export default Login;
