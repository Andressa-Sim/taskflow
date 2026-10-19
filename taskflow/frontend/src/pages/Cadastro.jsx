import { useState } from "react";
import { Link } from "react-router-dom";

function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  function cadastrar(event) {
    event.preventDefault();

    if (!nome || !email || !senha || !confirmarSenha) {
      setMensagem("Preencha todos os campos.");
      return;
    }

    if (senha !== confirmarSenha) {
      setMensagem("As senhas não são iguais.");
      return;
    }

    setMensagem("Cadastro realizado com sucesso!");
  }

  return (
    <main className="login-container">
      <section className="login-card">
        <div className="logo">✓</div>

        <h1>Crie sua conta</h1>
        <p className="subtitle">Comece a organizar suas tarefas</p>

        <form onSubmit={cadastrar}>
          <label htmlFor="nome">Nome</label>
          <input
            id="nome"
            type="text"
            placeholder="Digite seu nome"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
          />

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
            placeholder="Crie uma senha"
            value={senha}
            onChange={(event) => setSenha(event.target.value)}
          />

          <label htmlFor="confirmarSenha">Confirmar senha</label>
          <input
            id="confirmarSenha"
            type="password"
            placeholder="Digite novamente"
            value={confirmarSenha}
            onChange={(event) => setConfirmarSenha(event.target.value)}
          />

          <button type="submit">Cadastrar</button>
        </form>

        {mensagem && <p className="mensagem">{mensagem}</p>}

        <p className="cadastro">
          Já possui uma conta? <Link to="/">Entrar</Link>
        </p>
      </section>
    </main>
  );
}

export default Cadastro;