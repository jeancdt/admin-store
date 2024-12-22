import { Link, useLoaderData } from "react-router-dom";

export async function loader({ params }) {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${params.id}`);
    if (!response.ok) {
      throw new Error(`Erro ao buscar produto: ${response.status}`);
    }
    const product = await response.json();
    return product;
  } catch (error) {
    console.log(error);
  }
}

function ProductDetails() {
  const product = useLoaderData();

  const cell = 5554999999999;
  const message = `Olá, gostaria de saber mais sobre o produto: ${product.title}`;
  const linkWatsApp = `https://api.whatsapp.com/send?phone=${cell}&text=${encodeURIComponent(message)}`;

  return (
    <div id="product">
      <div className="wrap">
        <img src={product.image} alt={product.title} />
      </div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>Preço: R$ {product.price.toFixed(2)}</p>
      <Link className="button" to={`${linkWatsApp}`} target="_blank" rel="noopener noreferrer">
        Entrar em Contato
      </Link>
    </div>
  );
}

export default ProductDetails;
