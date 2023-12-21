import PropTypes from 'prop-types'

export const TopBar = ({setShow}) => {
  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-3 static-top shadow">
      <button className="btn btn-outline-dark border-0" onClick={() => setShow(0)}><i className="fas fa-bars"></i></button>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item dropdown no-arrow mx-1">
          <a className="nav-link dropdown-toggle" href="/" id="alertsDropdown">
            <i className="fas fa-bell fa-fw"></i>

            <span className="badge badge-danger badge-counter">3+</span>
          </a>
        </li>

        <li className="nav-item dropdown no-arrow mx-1">
          <a
            className="nav-link dropdown-toggle"
            href="/"
            id="messagesDropdown"
          >
            <i className="fas fa-envelope fa-fw"></i>
            
            <span className="badge badge-danger badge-counter">7</span>
          </a>
        </li>

        <div className="topbar-divider d-none d-sm-block"></div>

        <li className="nav-item dropdown no-arrow">
          <a className="nav-link dropdown-toggle" href="/" id="userDropdown">
            <span className="mr-2 d-none d-lg-inline text-gray-600 small">
              Bienvenido!      Usuario Administrador
            </span>
            <img
              className="img-profile rounded-circle"
              src="/images/1698096405184_user_.png"
              alt="Imagen de Usuario Administrador"
              width="60"
            />
          </a>
          
        </li>
      </ul>
    </nav>
  );
};

TopBar.propTypes = {
  setShow : PropTypes.func
}
