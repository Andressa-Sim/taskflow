import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CheckCircle,
  Clock,
  ListTodo,
  LogOut,
  Plus,
} from "lucide-react";

function Dashboard() {
  const navigate = useNavigate();
  const [filtro, setFiltro] = useState("todas");

  const tarefas = [
    {
      id: 1,
      titulo: "Finalizar tela de login",
      prioridade: "Alta",
      status: "Concluída",
    },
    {
      id: 2,
      titulo: "Criar dashboard",
      prioridade: "Média",
      status: "Em andamento",
    },
    {
      id: 3,
      titulo: "Configurar banco de dados",
      prioridade: "Alta",
      status: "Pendente",
    },
  ];

  const tarefasFiltradas = tarefas.filter((tarefa) => {
    if (filtro === "todas") return true;
    return tarefa.status.toLowerCase() === filtro;
  });

  function sair() {
    navigate("/");
  }

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div>
          <h2 className="sidebar-logo">✓ TaskFlow</h2>

          <nav className="sidebar-menu">
            <button className="menu-item active">
              <ListTodo size={20} />
              Minhas tarefas
            </button>
          </nav>
        </div>

        <button className="logout-button" onClick={sair}>
          <LogOut size={20} />
          Sair
        </button>
      </aside>

      <main className="dashboard-content">
        <header className="dashboard-header">
          <div>
            <p className="welcome">Olá, Andressa!</p>
            <h1>Visão geral das tarefas</h1>
          </div>

          <button className="new-task-button">
            <Plus size={20} />
            Nova tarefa
          </button>
        </header>

        <section className="summary-grid">
          <article className="summary-card">
            <div className="summary-icon purple">
              <ListTodo size={24} />
            </div>
            <div>
              <span>Total de tarefas</span>
              <strong>{tarefas.length}</strong>
            </div>
          </article>

          <article className="summary-card">
            <div className="summary-icon orange">
              <Clock size={24} />
            </div>
            <div>
              <span>Pendentes</span>
              <strong>
                {tarefas.filter((tarefa) => tarefa.status === "Pendente").length}
              </strong>
            </div>
          </article>

          <article className="summary-card">
            <div className="summary-icon green">
              <CheckCircle size={24} />
            </div>
            <div>
              <span>Concluídas</span>
              <strong>
                {
                  tarefas.filter(
                    (tarefa) => tarefa.status === "Concluída",
                  ).length
                }
              </strong>
            </div>
          </article>
        </section>

        <section className="tasks-section">
          <div className="tasks-title">
            <h2>Minhas tarefas</h2>

            <select
              value={filtro}
              onChange={(event) => setFiltro(event.target.value)}
            >
              <option value="todas">Todas</option>
              <option value="pendente">Pendentes</option>
              <option value="em andamento">Em andamento</option>
              <option value="concluída">Concluídas</option>
            </select>
          </div>

          <div className="task-list">
            {tarefasFiltradas.map((tarefa) => (
              <article className="task-item" key={tarefa.id}>
                <div>
                  <h3>{tarefa.titulo}</h3>
                  <span
                    className={`priority priority-${tarefa.prioridade.toLowerCase()}`}
                  >
                    Prioridade {tarefa.prioridade}
                  </span>
                </div>

                <span className="task-status">{tarefa.status}</span>
              </article>
            ))}

            {tarefasFiltradas.length === 0 && (
              <p className="empty-message">
                Nenhuma tarefa encontrada nesse filtro.
              </p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;