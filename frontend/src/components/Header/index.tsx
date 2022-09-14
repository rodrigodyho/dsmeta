import logo from '../../assets/img/logo.svg';

import './styles.css';

function Header() {
    return (

        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>Dash Board de Vendas</h1>
                <p>
                    Desenvolvido por
                    <a href="https://www.linkedin.com/in/rodrigosantoslima/"> Rodrigo Lima</a>
                </p>
            </div>
        </header>

    )
}

export default Header;
