import { useNavigate } from "react-router-dom";

let arrayAbout = [
  {
    id: 1,
    text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi repellendus soluta odit voluptatibus in voluptatem, sint placeat. Omnis numquam voluptate expedita sint distinctio placeat in facere, nostrum eveniet, corrupti nisi.`,
    imageUrl: null,
    sequence: 10,
  },
  {
    id: 2,
    text: null,
    imageUrl: `https://cataas.com/cat`,
    sequence: 20,
  },
  {
    id: 3,
    text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga nemo blanditiis consequatur, voluptatem inventore in, sit labore veniam, officiis totam maxime qui deleniti? Voluptatum, magni rem tenetur ipsa commodi odio. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis quo unde laborum sunt, nobis molestias, nesciunt, fugit debitis facilis placeat ab voluptatem minus! Harum libero magnam iure similique, quas perferendis.`,
    imageUrl: null,
    sequence: 30,
  },
  {
    id: 4,
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sit fugit eius ullam ipsa architecto odio ipsam corporis voluptatum iure, distinctio autem aperiam nesciunt velit quis eligendi. Sint, quo corrupti.`,
    imageUrl: null,
    sequence: 40,
  },
  {
    id: 5,
    text: null,
    imageUrl: `https://cataas.com/cat`,
    sequence: 50,
  },
];

function buildImage(imageUrl) {
  return (
    <div className="wrap">
      <img src={imageUrl} alt="Imagem Sobre a Loja" />
    </div>
  );
}

function buildText(paragraph) {
  return <p className="text">{paragraph}</p>;
}

function About() {
  const content = arrayAbout.map((item) => {
    if (item.imageUrl && !item.text) {
      return buildImage(item.imageUrl);
    } else if (item.text && !item.imageUrl) {
      return buildText(item.text);
    } else {
      return null;
    }
  });

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/products");
  };

  return (
    <div className="container">
      <h1>Conheça mais sobre nossa Loja!</h1>

      <div id="about">{content}</div>

      <button onClick={handleClick} style={{ "margin-top": "1rem" }}>
        Ir para a página de Produtos!
      </button>
    </div>
  );
}
export default About;
