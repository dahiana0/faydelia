
export const Header = () => {
    return (

        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">

                    <a className="navbar-brand" href="#">Navbar</a>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">

                            <li className="nav-item">
                                <a className="nav-link active" href="#">Home</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>

                        </ul>

                        <form className="d-flex ms-auto align-items-center" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>

                                <a href="#" className="ms-2">
                                    <img src="public/bell.svg" width="28" height="28" alt="Notificaciones"/> 
                                </a>

                        </form>

                    </div>
                </div>
            </nav>


        </>
    )
}

