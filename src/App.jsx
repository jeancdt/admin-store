import "./App.css";
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <header>
        <div>
          <h1>Admin Store</h1>
        </div>

        <nav>
          <ul>
            <Link className="navigatorMenu" to="/">
              Home
            </Link>

            <Link className="navigatorMenu" to="/about">
              Sobre Nós
            </Link>

            <Link className="navigatorMenu" to="/products">
              Produtos
            </Link>

            <Link className="navigatorMenu" to="/admin/products">
              Gerenciar
            </Link>
          </ul>
        </nav>
      </header>

      <main>
        {/* Outlet é o "espaço reservado" onde o conteúdo da rota filha será renderizado */}
        <Outlet />
      </main>

      <footer>
        <p>&copy; 2024 Minha Loja. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
export default App;
