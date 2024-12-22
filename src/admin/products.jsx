import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function AdminProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error(`Erro: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const deletarProduto = async (id) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert(`O item com ID ${id} foi supostamente deletado.`);
        window.location.reload();
      } else {
        alert(`Erro ao tentar deletar o item com ID ${id}.`);
      }
    } catch (error) {
      console.error("Erro ao deletar: ", error);
    }
  };

  return (
    <div>
      <h1>Lista de Produtos</h1>

      <button className="buttonDestructive">
        <Link
          className="productCard"
          to={`/admin/products/addProduct`}
          state={{ product: null }}
          title="Adicionar Produto"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="green" viewBox="0 0 256 256">
            <path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,176H48V48H208V208Zm-32-80a8,8,0,0,1-8,8H136v32a8,8,0,0,1-16,0V136H88a8,8,0,0,1,0-16h32V88a8,8,0,0,1,16,0v32h32A8,8,0,0,1,176,128Z"></path>
          </svg>
        </Link>
      </button>

      <ul className="adminProductsList">
        {products.map((product) => (
          <li key={product.id}>
            <div className="adminProducts" title={product.title}>
              <div>
                <img src={product.image} alt={product.title} />

                <p>{product.title}</p>
              </div>

              <div>
                <button className="buttonDestructive">
                  <Link
                    className="productCard"
                    to={`/admin/products/addProduct`}
                    state={{ product }}
                    title="Editar Produto"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="blue" viewBox="0 0 256 256">
                      <path d="M229.66,58.34l-32-32a8,8,0,0,0-11.32,0l-96,96A8,8,0,0,0,88,128v32a8,8,0,0,0,8,8h32a8,8,0,0,0,5.66-2.34l96-96A8,8,0,0,0,229.66,58.34ZM124.69,152H104V131.31l64-64L188.69,88ZM200,76.69,179.31,56,192,43.31,212.69,64ZM224,128v80a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32h80a8,8,0,0,1,0,16H48V208H208V128a8,8,0,0,1,16,0Z"></path>
                    </svg>
                  </Link>
                </button>

                <button
                  className="buttonDestructive"
                  onClick={() => deletarProduto(product.id)}
                  title="Deletar Produto"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="red" viewBox="0 0 256 256">
                    <path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminProductList;
