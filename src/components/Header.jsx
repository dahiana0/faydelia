import "../styles/css.css"
export const Header = () => {
    return (

        <>
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#EDE8D0",
                fontFamily:"'milk'"
             }}>
    <div className="container">

        <a className="navbar-brand text-#787569" href="#">Navbar</a>

        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">

                <li className="nav-item">
                    <a className="nav-link text-#787569" href="#">Home</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link text-#787569" href="#">Moonveil Cakes</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link text-#787569" href="#">Stardust Cookies</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link text-#787569" href="#">Moonlight Desserts</a>
                </li>

            </ul>

            <form className="d-flex ms-auto align-items-center w-20" role="search">

                <img src="public/search.svg" alt="" className="ms-3"/>

                <input 
                    className="form-control me-1" 
                    type="search" 
                    placeholder="Search"
                    aria-label="Search"
                />

                <a href="#" className="ms-3">
                    <img src="public/bell.svg" width="28" height="28" alt="Notificaciones" />
                </a>

                <a href="#" className="ms-3">
                    <img src="public/user.svg" width="28" height="28" alt="Usuario" />
                </a>

                <li className="nav-item dropdown list-unstyled ms-3">
                    <a 
                        className="nav-link dropdown-toggle text-#787569" 
                        href="#" 
                        role="button" 
                        data-bs-toggle="dropdown" 
                        aria-expanded="false"
                    >
                        X_AE_A-13
                    </a>

                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-divider"></a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </li>

            </form>

        </div>
    </div>
</nav>
        </>
    )
}

