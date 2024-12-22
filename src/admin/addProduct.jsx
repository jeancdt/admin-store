import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../App.css";

function AddProductPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const productToEdit = location.state?.product;

  const [title, setTitle] = useState(productToEdit?.title || "");
  const [price, setPrice] = useState(productToEdit?.price || "");
  const [description, setDescription] = useState(productToEdit?.description || "");
  const [image, setImage] = useState(productToEdit?.image || "");
  const [category, setCategory] = useState(productToEdit?.category || "");

  const onSubmit = async (e) => {
    e.preventDefault();

    const productData = {
      title,
      price: parseFloat(price),
      description,
      image,
      category,
    };

    try {
      let response;

      if (productToEdit) { // Se vier preenchido -> Editar
        response = await fetch(`https://fakestoreapi.com/products/${productToEdit.id}`, {
          method: "PUT",
          body: JSON.stringify(productData),
          headers: {
            "Content-Type": "application/json",
          },
        });
      } else { // Se vier nulo -> Adicionar
        response = await fetch("https://fakestoreapi.com/products", {
          method: "POST",
          body: JSON.stringify(productData),
          headers: {
            "Content-Type": "application/json",
          },
        });
      }

      if (!response.ok) {
        throw new Error(`Erro ao ${productToEdit ? "editar" : "adicionar"} produto: ${response.status}`);
      }

      const result = await response.json();
      alert(`${productToEdit ? "Produto editado" : "Produto adicionado"} com sucesso!`);
      console.log(result);

      navigate("/admin/products");
    } catch (error) {
      console.error(`Erro ao ${productToEdit ? "editar" : "adicionar"} o produto:`, error);
    }
  };

  return (
    <div className="formContainer">
      <div className="formImgContainer">
        {image ? <img src={image} alt="Preview da Imagem" /> : <p>Adicione o link da imagem para visualizá-la aqui!</p>}
      </div>

      <div className="formInputContainer">
        <h1>{productToEdit ? "Editar Produto" : "Adicionar Produto"}</h1>
        <form onSubmit={onSubmit}>
          <label>
            Título:{" "}
            <input maxLength={50} type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
          </label>

          <label>
            Preço: <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
          </label>

          <label>
            Descrição:{" "}
            <textarea maxLength={200} value={description} onChange={(e) => setDescription(e.target.value)} required />
          </label>

          <label>
            Link da Imagem: <input type="url" value={image} onChange={(e) => setImage(e.target.value)} required />
          </label>

          <label>
            Categoria:{" "}
            <input maxLength={50} type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
          </label>

          <button type="submit">{productToEdit ? "Editar Produto" : "Adicionar Produto"}</button>
        </form>
      </div>
    </div>
  );
}

export default AddProductPage;
