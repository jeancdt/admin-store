import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function ProductList() {
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

  return (
    <div>
      <h1>Lista de Produtos</h1>
      <ul className="productList">
        {products.map((product) => (
          <li key={product.id} className="productItem">
            <Link className="productCard" to={`/products/${product.id}`} title={product.title}>
              <img src={product.image} alt={product.title} />
              <p>{product.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
