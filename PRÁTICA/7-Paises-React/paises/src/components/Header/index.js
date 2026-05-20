
function Header() {
    return(
        <>
            <header className="sb pl-g pr-g mb-g">
                <div className="logo">LOGO</div>
                <div className="search">
                    <input type='text' name="search" className="input-search"></input>
                </div>
                <ul className="menu" >
                    <li> <a href="#" className="nav-link">Opção1</a> </li>
                    <li> <a href="#" className="nav-link">Opção2</a> </li>
                    <li> <a href="#" className="nav-link">Opção3</a> </li>
                </ul>
            </header>
        </>
    );
}

export default Header;