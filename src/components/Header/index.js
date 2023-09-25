
import './header.css';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header>
            <Link to='/'><button className='voltar'> Voltar </button></Link>
            <Link className='logo' to='/'>Prime Flix</Link>
            <Link className='favoritos' to='/favoritos'>Meus Filmes</Link>
        </header>
    )
}
export default Header;