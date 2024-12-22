import { useNavigate } from 'react-router-dom';
import '../App.css'

function Home() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/about');
    };

    return (
        <div className='container'>
            <h1>Admin Store</h1>

            <p>Bem-vindo à Admin Store! Gerencie seus produtos de maneira fácil e prática.</p>

            <button onClick={handleClick}>Ir para a página Sobre Nós</button>
        </div>
    );
}

export default Home;
